package main

/*
1. “net/http” to access the core go http functionality
2. “fmt” for formatting our text
3. “html/template” a library that allows us to interact with our html file.
4. "time" - a library for working with date and time.
*/
import (
	"fmt"
	"log"
	"net/http"
)

//Go server application entry point
func main() {
	//handling HTML /static/
	http.Handle("/static/",
		http.StripPrefix("/static/",
			http.FileServer(http.Dir("../static"))))

	//PATH handling
	http.HandleFunc("/", MainHandler)
	http.HandleFunc("/about", AboutHandler)

	//start server, set port to 8080
	fmt.Println("Server Listening on PORT 8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
