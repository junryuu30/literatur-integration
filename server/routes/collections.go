package routes

// import (
// 	"literature/handlers"
// 	"literature/pkg/middleware"
// 	"literature/pkg/mysql"
// 	"literature/repositories"

// 	"github.com/gorilla/mux"
// )

// func CollectionRoutes(r *mux.Router) {
// 	collectionRepository := repositories.RepositoryCollection(mysql.DB)

// 	h := handlers.HandlerCollection(collectionRepository)

// 	// r.HandleFunc("/collections", middleware.Auth(h.FindCollections)).Methods("GET")
// 	// r.HandleFunc("collection/{id}", h.GetCollection).Methods("GET")
// 	// r.HandleFunc("/collection", middleware.Auth(h.CreateCollection)).Methods("POST")

// 	// r.HandleFunc("/cart/add/{productID}", middleware.Auth(h.AddToCart)).Methods("POST")
// 	r.HandleFunc("/carts", middleware.Auth(h.GetCollectionByUserID)).Methods("GET")
// 	// r.HandleFunc("/cart/update/{productID}", middleware.Auth(h.DeleteChartByQty)).Methods("PATCH")
// 	r.HandleFunc("/cart/delete/{productID}", middleware.Auth(h.DeleteCollectiontByID)).Methods("DELETE")
// }
