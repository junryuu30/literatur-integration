package authdto

type RegisterResponse struct {
	FullName string `gorm:"type: varchar(255)" json:"name"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Phone    string `gorm:"type: varchar(255)" json:"phone"`
	Address  string `gorm:"type: varchar(255)" json:"address"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
}

type LoginResponse struct {
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Password string `gorm:"type: varchar(255)" json:"password"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
}

// type CheckAuthResponse struct {
// 	Id       int    `gorm:"type: int" json:"id"`
// 	FullName string `gorm:"type: varchar(255)" json:"fullname"`
// 	Email    string `gorm:"type: varchar(255)" json:"email"`
// }

type CheckAuthResponse struct {
	Id       int    `json:"id"`
	Email    string `json:"email"`
	FullName string `json:"fullName"`
	Password string `json:"password"`
	Gender   string `json:"gender"`
	Phone    string `json:"phone"`
	Image    string `json:"image"`
}
