
const connection = require("../database/Hotelsql");
const mysql = require("mysql")

const mongo = require('mongodb');
const { MongoClient, mydb, coleccion1, coleccion2, url } = require("../database/mongo.js")
const req = require("express/lib/request");




const user = {
    home: (req, res) => {
        console.log(req.body);
    },
    registro: (req, res) => {
        console.log(req.body);
        var nombre = req.body.nombre;
        var dni = req.body.dni;
        var telefono = req.body.telefono;
        var codpostal = req.body.codpostal;
        var email = req.body.email;
        var contrasena = req.body.contrasena;

        let insertQuery = `INSERT INTO Clientes (nombre,dni,telefono,codpostal,email,contrasena)VALUES (?,?,?,?,?,?)`;
        let query2 = mysql.format(insertQuery, [nombre, dni, telefono, codpostal, email, contrasena]);

        connection.query(query2, (err, response) => {
            if (err) throw err;
            console.log(response.insertId);

            //connection.end();
        });

        res.send('Registro realizado correctamente')
    },

    login: (req, res) => {
        console.log(req.body);
        var email = req.body.email;
        var contrasena = req.body.contrasena;

        let selectQuery = `SELECT * FROM Login WHERE email = "${email}" AND contrasena = "${contrasena}"`
        connection.query(selectQuery, (err, data) => {
            if (err) throw err;
            if (data.length == 0) {
                res.send("Email y contraseña incorrectos")
                console.log("Email y contraseña incorrectos")
            } else {
                res.send(data);
                console.log("Email y contraseña correctos")
            }
            //connection.end();
        });

        console.log(res);
    },
    reservas: (req, res) => {
        console.log(req.body);
        var huespedes = req.body.huespedes;
        var fecha_entrada = req.body.fecha_entrada;
        var fecha_salida = req.body.fecha_salida;
        var tipo_habitacion = req.body.tipo_habitacion;


        let insertQuery = `INSERT INTO Reservas (huespedes,fecha_entrada,fecha_salida,tipo_habitacion)VALUES (?,?,?,?)`;
        let query2 = mysql.format(insertQuery, [huespedes, fecha_entrada, fecha_salida, tipo_habitacion]);

        connection.query(query2, (err, response) => {
            if (err) throw err;
            console.log(response.insertId);

            //connection.end();
        });

        res.send("Reserva realizada correctamente")
        console.log(res);
    },

    busquedas: (req, res) => {



        let selectQuery = `SELECT * FROM Reservas WHERE tipo_habitacion = "${tipo_habitacion}"    AND fecha_entrada = "${fecha_entrada}" AND fecha_salida = "${fecha_salida}"`
        connection.query(selectQuery, (err, data) => {

            //connection.end();
        });

        console.log(res);
    },

    datostarjeta: (req, res) => {
        console.log(req.body);
        var numTarjeta = req.body.numTarjeta;


        let insertQuery = `INSERT INTO DatosTarjeta (numTarjeta)VALUES (?)`;
        let query2 = mysql.format(insertQuery, [numTarjeta]);

        connection.query(query2, (err, response) => {
            if (err) throw err;
            console.log(response.insertId);

            //connection.end();
        });

        res.send("Datos tarjeta guardados correctamente")
        console.log(res);
    },




    cancelareservas: (req, res) => {
        console.log(req.body);
        var id_reserva = req.body.id_reserva;

        let deleteQuery = `DELETE from Reservas WHERE id = "${id_reserva}"`;
        connection.query(deleteQuery, (err, response) => {
            if (err) throw err;
            console.log(response);
            //connection.end();
        });


        res.send('Reserva Cancelada')
    },

    historial: (req, res) => {
        //Ver todos
        let idHistorial = "62a707dc88bb7879ad9afb78"
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection(coleccion2).find({ _id: mongo.ObjectId(idHistorial) }).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                res.send(result)
                res.send("Se muestra el historial correctamente")
            });
        });
    },

    habitaciones: (req, res) => {
        //Ver todos
        let idHistorial = "62a0916ed60ae419ded87a69"
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            dbo.collection(coleccion2).find({ _id: mongo.ObjectId(idHistorial) }).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                res.send(result)
                res.send("Se muestra los datos de la habitacion correctamente")
            });
        });
    },
}

module.exports = user;













