package models

import "gopkg.in/mgo.v2/bson"

// User represents the structure of our resource
type User struct {
	ID   bson.ObjectId `json:"id" bson:"_id"`
	Name string        `json:"name" bson:"name"`
	Game string        `json:"game" bson:"game"`
	Time string        `json:"time" bson:"time"`
}
