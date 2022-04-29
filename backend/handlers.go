package main

import (
	"html/template"
	"log"
	"net/http"
	"time"
)

//Create a struct that holds information to be displayed in our HTML file
type Welcome struct {
	Name string
	Time string
}

func AboutHandler(w http.ResponseWriter, r *http.Request) {
	welcome := Welcome{"Customer", time.Now().Format(time.Stamp)}
	templates := template.Must(template.ParseFiles("../templates/about.html"))

	if err := templates.ExecuteTemplate(w, "about.html", welcome); err != nil {
		log.Print(err.Error())                                     //display error on console
		http.Error(w, err.Error(), http.StatusInternalServerError) //display error on browser
	}
}

func MainHandler(w http.ResponseWriter, r *http.Request) {
	welcome := Welcome{"Customer", time.Now().Format(time.Stamp)}
	templates := template.Must(template.ParseFiles("../templates/index.html"))

	//Takes the name from the URL query e.g ?name=Satomi, will set welcome.Name = Satomi
	if name := r.FormValue("name"); name != "" {
		welcome.Name = name
	}

	if err := templates.ExecuteTemplate(w, "index.html", welcome); err != nil {
		log.Print(err.Error())                                     //display error on console
		http.Error(w, err.Error(), http.StatusInternalServerError) //display error on browser
	}
}
