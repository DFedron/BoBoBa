package main

/*
1. “net/http” to access the core go http functionality
2. “fmt” for formatting our text
3. “html/template” a library that allows us to interact with our html file.
4. "time" - a library for working with date and time.
*/
import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

var tpl *template.Template

//Go server application entry point
func main() {
	//Parse any matching *.html files
	tpl, _ = tpl.ParseGlob("../templates/*.html")

	//handling HTML CSS from /static/ directory
	fs := http.FileServer(http.Dir("../static"))
	http.Handle("/static/", http.StripPrefix("/static/", fs))

	//PATH handling
	http.HandleFunc("/", IndexHandler)
	http.HandleFunc("/about", AboutHandler)
	http.HandleFunc("/contact", ContactHandler)
	http.HandleFunc("/login", LoginHandler)

	//Start Server, set PORT to 8080
	//127.0.0.1:8080 for DEV, change back to :8080 for prod
	fmt.Println("Server Listening on PORT 8080...")
	log.Fatal(http.ListenAndServe("127.0.0.1:8080", nil))
}
