package repositories

// import (
// 	"literature/models"
// 	// "gorm.io/gorm"
// )

// type CollectionRepository interface {
// 	// AddToCollection(collection models.Collection) (models.Collection, error)
// 	GetCollectionByID(ID int) (models.Collection, error)
// 	GetCollectionByUserID(userID int) ([]models.Collection, error)
// 	// GetCollectionByUser(userID int, literaturID int) (models.Collection, error)
// 	// UpdateCollection(Collection models.Collection, userID int, literaturID int)
// 	DeleteCollectionByID(Collection models.Collection, ID int) (models.Collection, error)
// }

// func RepositoryCollection(db *gorm.DB) *repository {
// 	return &repository{db}
// }

// // func (r *repository) AddToCart(cart models.Cart) (models.Cart, error) {
// // 	err := r.db.Create(&cart).Preload("User").Preload("Products").Error

// // 	return cart, err
// // }

// func (r *repository) GetCollections(collections []models.Collection) ([]models.Collection, error) {
// 	err := r.db.Preload("User").Preload("Products").Find(&collections).Error

// 	return collections, err
// }

// func (r *repository) GetCollection(collection models.Collection, ID int) (models.Collection, error) {
// 	err := r.db.Preload("User").Preload("Literaturs").First(&collection, ID).Error

// 	return collection, err
// }

// func (r *repository) GetCollectionExist(userID int, literaturID int) (models.Collection, error) {
// 	var collection models.Collection
// 	err := r.db.Preload("User").Preload("Literatur").First(&collection, "user_id=? and _id=?", userID, literaturID).Error

// 	return collection, err
// }

// // func (r *repository) UpdateCartQty(cart models.Cart, ID int) (models.Cart, error) {
// // 	err := r.db.Model(&cart).Where("id=?", ID).Preload("User").Preload("Products").Updates(&cart).Error

// // 	return cart, err
// // }

// func (r *repository) DeleteCollectionByID(collection models.Collection, ID int) (models.Collection, error) {
// 	err := r.db.Delete(&collection, "id=?", ID).Preload("Literaturs").Preload("User").Error
// 	return collection, err
// }

// func (r *repository) DeleteCollectionByUser(collection models.Collection, userID int) error {
// 	err := r.db.Preload("Literaturs").Preload("User").Delete(&collection, "user_id=?", userID).Error
// 	return err
// }
