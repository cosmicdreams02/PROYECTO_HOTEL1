
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mydb = "Hotel";
const coleccion1 = "Habitaciones";
const coleccion2 = "Historial";
const url = "mongodb://localhost:27017/";

module.exports =
{
    mongo: mongo,
    MongoClient: MongoClient,
    mydb: mydb,
    coleccion1: coleccion1,
    coleccion2: coleccion2,
    url: url
}

