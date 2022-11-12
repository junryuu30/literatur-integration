package handlers

// import (
// 	"encoding/json"
// 	dto "literature/dto/result"
// 	"literature/repositories"
// 	"net/http"
// 	"strconv"

// 	"github.com/golang-jwt/jwt/v4"
// 	"github.com/gorilla/mux"
// )

// var path_file_collection = "http://localhost:5000/uploads/"

// type handlerCollection struct {
// 	CollectionRepository repositories.CollectionRepository
// }

// func HandlerCollection(CollectionRepository repositories.CollectionRepository) *handlerCollection {
// 	return &handlerCollection{CollectionRepository}

// }

// // type CollectionRepository interface {
// // 	AddToCollection(collection models.Collection) (models.Collection, error)
// // 	GetCollectionByID(ID int) (models.Collection, error)
// // 	GetCollectionByUserID(userID int) ([]models.Collection, error)
// // 	GetCollectionByUser(userID int, literaturID int) (models.Collection, error)
// // 	UpdateCollection(Collection models.Collection, userID int, literaturID int)
// // 	DeleteCollectionByID(Collection models.Collection, ID int) (models.Collection, error)
// // }

// // func (h *handlerCollection) AddToCollection(w http.ResponseWriter, r *http.Request) {
// // 	w.Header().Set("Content-Type", "application/json")

// // 	literaturId, _ := strconv.Atoi(mux.Vars(r)["literaturID"])

// // 	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
// // 	userId := int(userInfo["id"].(float64))

// // 	var collectionModels models.Collection
// // 	if err := json.NewDecoder(r.Body).Decode(&collectionModels); err != nil {
// // 		w.WriteHeader(http.StatusBadRequest)
// // 		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// // 		json.NewEncoder(w).Encode(response)
// // 		return
// // 	}

// // 	var collection models.Collection
// // 	// collectionExist, err := h.CollectionRepository.GetCollectionByUser(userId, literaturId)

// // 	if err == nil {
// // 		collectionModels.UserID = userId
// // 		collectionModels.LiteraturID = literaturId

// // 		collection, err = h.CollectionRepository.UpdateCollection(collectionModels, userId, literaturId)
// // 		fmt.Println(collection)

// // 		if err != nil {
// // 			w.WriteHeader(http.StatusInternalServerError)
// // 			response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// // 			json.NewEncoder(w).Encode(response)
// // 			return
// // 		}
// // 	} else {
// // 		collectionModels.UserID = userId
// // 		collectionModels.LiteraturID = literaturId

// // 		fmt.Println(collectionModels)

// // 		collection, err = h.CollectionRepository.AddToCollection(collectionModels)
// // 		fmt.Println(collection)

// // 		if err != nil {
// // 			w.WriteHeader(http.StatusInternalServerError)
// // 			response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// // 			json.NewEncoder(w).Encode(response)
// // 			return
// // 		}

// // 	}

// // 	w.WriteHeader(http.StatusOK)
// // 	response := dto.SuccessResult{Code: http.StatusOK, Data: collection}
// // 	json.NewEncoder(w).Encode(response)

// // }

// func (h *handlerCollection) GetCollectionByUserID(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
// 	userId := int(userInfo["id"].(float64))

// 	collection, err := h.CollectionRepository.GetCollectionByUserID(userId)
// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// 		json.NewEncoder(w).Encode(response)
// 		return
// 	}

// 	w.WriteHeader(http.StatusOK)
// 	response := dto.SuccessResult{Code: http.StatusOK, Data: collection}
// 	json.NewEncoder(w).Encode(response)

// }

// func (h *handlerCollection) DeleteCollectiontByID(w http.ResponseWriter, r *http.Request) {
// 	w.Header().Set("Content-Type", "application/json")

// 	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
// 	userId := int(userInfo["id"].(float64))

// 	literaturId, _ := strconv.Atoi(mux.Vars(r)["literaturID"])

// 	collectionItem, _ := h.CollectionRepository.GetCollectionByUser(userId, literaturId)

// 	cartDelete, err := h.CollectionRepository.DeleteCollectionByID(collectionItem, collectionItem.ID)

// 	if err != nil {
// 		w.WriteHeader(http.StatusInternalServerError)
// 		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
// 		json.NewEncoder(w).Encode(response)
// 		return
// 	}

// 	w.WriteHeader(http.StatusOK)
// 	response := dto.SuccessResult{Code: http.StatusOK, Data: cartDelete}
// 	json.NewEncoder(w).Encode(response)
// }
