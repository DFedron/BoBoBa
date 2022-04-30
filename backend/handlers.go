package main

import (
	"fmt"
	"log"
	"net/http"
	"time"
)

//Data to be passed into tpl.ExecuteTemplate()
type Welcome struct {
	Name string
	Time string
}

func IndexHandler(w http.ResponseWriter, r *http.Request) {
	//logs
	fmt.Println("Index handler is running...")

	//initialize welcome struct
	welcome := Welcome{"Customer", time.Now().Format(time.Stamp)}

	//Takes the name from the URL query (e.g ?name=Satomi), will set welcome.Name = Satomi
	if name := r.FormValue("name"); name != "" {
		welcome.Name = name
	}

	if err := tpl.ExecuteTemplate(w, "index.html", welcome); err != nil {
		log.Print(err.Error())                                     //display error on console
		http.Error(w, err.Error(), http.StatusInternalServerError) //display error on browser
	}
}

func AboutHandler(w http.ResponseWriter, r *http.Request) {
	//logs
	fmt.Println("About handler is running...")

	if err := tpl.ExecuteTemplate(w, "about.html", nil); err != nil {
		log.Print(err.Error())                                     //display error on console
		http.Error(w, err.Error(), http.StatusInternalServerError) //display error on browser
	}
}

func ContactHandler(w http.ResponseWriter, r *http.Request) {
	//logs
	fmt.Println("Contact handler is running...")

	if err := tpl.ExecuteTemplate(w, "contact.html", nil); err != nil {
		log.Print(err.Error())                                     //display error on console
		http.Error(w, err.Error(), http.StatusInternalServerError) //display error on browser
	}
}

func LoginHandler(w http.ResponseWriter, r *http.Request) {
	//logs
	fmt.Println("Login handler is running...")

	if err := tpl.ExecuteTemplate(w, "login.html", nil); err != nil {
		log.Print(err.Error())                                     //display error on console
		http.Error(w, err.Error(), http.StatusInternalServerError) //display error on browser
	}
}
