package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"

	"context"
	"encoding/json"
	"errors"
	"strings"

	"github.com/lestrrat-go/jwx/jwk"
	"github.com/lestrrat-go/jwx/jwt"

	//postgres imports
	"database/sql"
	_ "github.com/lib/pq"
)

//postgres variables
const (
	host     = "postgres"
	port     = 5432
	user     = "boboba_user"
	password = "boboba_pass"
	dbname   = "bobobadb"
)

var tpl *template.Template

const (
	corsAllowedDomain = "http://localhost:4040"
	authHeader        = "Authorization"
	ctxTokenKey       = "Auth0Token"
	permClaim         = "permissions"
)

const (
	yamlCfgFileName = "env.yaml"
	domainYamlKey   = "auth0-domain"
	audienceYamlKey = "auth0-audience"
)

// variables required from user
var (
	auth0Audience string
	auth0Domain   string
)

var (
	tenantKeys jwk.Set
)

type message struct {
	Message string `json:"message"`
}

var (
	publicMessage    = &message{"The API doesn't require an access token to share this message."}
	protectedMessage = &message{"The API successfully validated your access token."}
	adminMessage     = &message{"The API successfully recognized you as an admin."}
)

func publicApiHandler(rw http.ResponseWriter, _ *http.Request) {
	sendMessage(rw, publicMessage)
}

func protectedApiHandler(rw http.ResponseWriter, _ *http.Request) {
	sendMessage(rw, protectedMessage)
}

func adminApiHandler(rw http.ResponseWriter, _ *http.Request) {
	sendMessage(rw, adminMessage)
}

func sendMessage(rw http.ResponseWriter, data *message) {
	rw.Header().Add("Content-Type", "application/json")
	bytes, err := json.Marshal(data)
	if err != nil {
		log.Print("json conversion error", err)
		return
	}
	_, err = rw.Write(bytes)
	if err != nil {
		log.Print("http response write error", err)
	}
}

func handleCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		headers := rw.Header()
		// Allow-Origin header shall be part of ALL the responses
		headers.Add("Access-Control-Allow-Origin", corsAllowedDomain)
		if req.Method != http.MethodOptions {
			next.ServeHTTP(rw, req)
			return
		}
		// process an HTTP OPTIONS preflight request
		headers.Add("Access-Control-Allow-Headers", "Authorization")
		rw.WriteHeader(http.StatusNoContent)
		if _, err := rw.Write(nil); err != nil {
			log.Print("http response (options) write error", err)
		}
	})
}

// validateToken middleware verifies a valid Auth0 JWT token being present in the request.
func validateToken(next http.Handler) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		token, err := extractToken(req)
		if err != nil {
			fmt.Printf("failed to parse payload: %s\n", err)
			rw.WriteHeader(http.StatusUnauthorized)
			sendMessage(rw, &message{err.Error()})
			return
		}
		ctxWithToken := context.WithValue(req.Context(), ctxTokenKey, token)
		next.ServeHTTP(rw, req.WithContext(ctxWithToken))
	})
}

// extractToken parses the Authorization HTTP header for valid JWT token and
// validates it with AUTH0 JWK keys. Also verifies if the audience present in
// the token matches with the designated audience as per current configuration.
func extractToken(req *http.Request) (jwt.Token, error) {
	authorization := req.Header.Get(authHeader)
	if authorization == "" {
		return nil, errors.New("authorization header missing")
	}
	bearerAndToken := strings.Split(authorization, " ")
	if len(bearerAndToken) < 2 {
		return nil, errors.New("malformed authorization header: " + authorization)
	}
	token, err := jwt.Parse([]byte(bearerAndToken[1]), jwt.WithKeySet(tenantKeys),
		jwt.WithValidate(true), jwt.WithAudience(auth0Audience))
	if err != nil {
		return nil, err
	}
	return token, nil
}

func hasPermission(next http.Handler, permission string) http.Handler {
	return http.HandlerFunc(func(rw http.ResponseWriter, req *http.Request) {
		token := req.Context().Value(ctxTokenKey).(jwt.Token)
		if token == nil {
			fmt.Printf("failed to find token in context\n")
			rw.WriteHeader(http.StatusForbidden)
			sendMessage(rw, &message{http.StatusText(http.StatusForbidden)})
			return
		}
		if !tokenHasPermission(token, permission) {
			fmt.Printf("permission check failed\n")
			rw.WriteHeader(http.StatusForbidden)
			sendMessage(rw, &message{http.StatusText(http.StatusForbidden)})
			return
		}
		next.ServeHTTP(rw, req)
	})
}

func tokenHasPermission(token jwt.Token, permission string) bool {
	claims := token.PrivateClaims()
	tkPermissions, ok := claims[permClaim]
	if !ok {
		return false
	}
	tkPermList, ok := tkPermissions.([]interface{})
	if !ok {
		return false
	}
	for _, perm := range tkPermList {
		if perm == permission {
			return true
		}
	}
	return false
}

// fetchTenantKeys fetch and parse the tenant JSON Web Keys (JWK). The keys
// are used for JWT token validation during requests authorization.
func fetchTenantKeys() {
	set, err := jwk.Fetch(context.Background(),
		fmt.Sprintf("https://%s/.well-known/jwks.json", auth0Domain))
	if err != nil {
		log.Fatalf("failed to parse tenant json web keys: %s\n", err)
	}
	tenantKeys = set
}

//Go server application entry point
func main() {
	//postgres
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := sql.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	defer db.Close()

	err = db.Ping()
	if err != nil {
		panic(err)
	}

	sqlStatement := `
	CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  age INT,
  first_name TEXT,
  last_name TEXT,
  email TEXT UNIQUE NOT NULL
);`
	_, err = db.Exec(sqlStatement)
	if err != nil {
		panic(err)
	}

	//auth0
	initConfig()
	fetchTenantKeys()

	//Parse any matching *.html files
	tpl, _ = tpl.ParseGlob("templates/*.html")

	router := http.NewServeMux()

	//handling HTML CSS from /static/ directory
	fs := http.FileServer(http.Dir("./static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	//PATH handling
	router.Handle("/", http.NotFoundHandler())
	router.Handle("/about", http.HandlerFunc(AboutHandler))
	router.Handle("/contact", http.HandlerFunc(ContactHandler))
	router.Handle("/login", http.HandlerFunc(LoginHandler))

	router.Handle("/api/messages/public", http.HandlerFunc(publicApiHandler))
	router.Handle("/api/messages/protected", validateToken(http.HandlerFunc(protectedApiHandler)))
	router.Handle("/api/messages/admin",
		validateToken(hasPermission(http.HandlerFunc(adminApiHandler), "read:admin-messages")))

	routerWithCORS := handleCORS(router)

	server := &http.Server{
		Addr:    ":8080",
		Handler: routerWithCORS,
	}

	//Start Server, set PORT to 8080
	//127.0.0.1:8080 for DEV, change back to :8080 for prod
	fmt.Println("Server Listening on PORT 8080...")
	log.Fatal(server.ListenAndServe())
}

func CheckError(err error) {
	if err != nil {
		panic(err)
	}
}
