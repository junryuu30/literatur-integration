package routes

import (
	"literature/handlers"
	"literature/pkg/middleware"
	"literature/pkg/mysql"
	"literature/repositories"

	"github.com/gorilla/mux"
)

func LiteraturRoutes(r *mux.Router) {
	LiteraturRepository := repositories.RepositoryLiteratur(mysql.DB)

	h := handlers.HandlerLiteratur(LiteraturRepository)

	r.HandleFunc("/literaturs", h.FindLiteraturs).Methods("GET")

	r.HandleFunc("/literaturs/user/{userId}", middleware.Auth(h.GetLiteraturByUserID)).Methods("GET")

	r.HandleFunc("/literatur", middleware.Auth(middleware.UploadCover(middleware.UploadPDF(h.CreateLiteratur)))).Methods("POST")

	r.HandleFunc("/literatur/{id}", h.GetLiteratur).Methods("GET")

	r.HandleFunc("/literatur/{id}", middleware.Auth(h.DeleteLiteratur)).Methods("DELETE")

}
