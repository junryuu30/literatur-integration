package models

type Collection struct {
	ID          int                  `json:"id" gorm:"primary_key:auto_increment"`
	LiteraturID int                  `json:"literatur_id"`
	Literaturs  LiteraturResponse    `json:"literatur"`
	UserID      int                  `json:"user_id"`
	Users       UsersProfileResponse `json:"user"`
}

type CollectionResponse struct {
	ID         int                  `json:"id"`
	Users      UsersProfileResponse `json:"user"`
	Literaturs LiteraturResponse    `json:"literatur"`
}

func (CollectionResponse) TableName() string {
	return "collections"
}
