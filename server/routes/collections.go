package routes

import (
	"literature/handlers"
	"literature/pkg/middleware"
	"literature/pkg/mysql"
	"literature/repositories"

	"github.com/gorilla/mux"
)

func CollectionRoutes(r *mux.Router) {
	collectionRepository := repositories.RepositoryCollection(mysql.DB)

	h := handlers.HandlerCollection(collectionRepository)

	r.HandleFunc("/collection", middleware.Auth(h.CreateCollection)).Methods("POST")
	r.HandleFunc("/collection/{id}", h.GetCollection).Methods("GET")
	r.HandleFunc("/collections", h.FindCollection).Methods("GET")
}
