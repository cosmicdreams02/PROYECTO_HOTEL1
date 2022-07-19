
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
        var email = req.body.email;
        var contrasena = req.body.contrasena;

        let selectQuery = `SELECT * FROM Login WHERE email =  '${email}' AND contrasena = '${contrasena}'`
        console.log(selectQuery)
        connection.query(selectQuery, (err, data) => {
            console.log(data);
            if (err) throw err;
            if (data[0] == "") {
                console.log("[Email y contraseña incorrectos")
                res.send(data[0])
            } else {
                console.log("Email y contraseña correctos")

                res.send(data[0])
            }
            //connection.end();
        });

        console.log(res);
    },


    reservas: (req, res) => {


/*             let checkeoReservasIndividuales = 'SELECT  COUNT(*) FROM Reservas WHERE tipo_habitacion = "individual"';
            let checkeoReservasDobles = 'SELECT  COUNT(*) FROM Reservas WHERE tipo_habitacion = "doble"';
            let checkeoReservasTriples = 'SELECT  COUNT(*) FROM Reservas WHERE tipo_habitacion = "triple"'; 

            connection.query(checkeoReservasIndividuales, (err, data) => {
                if(err) throw err;
                console.log(data);
                //connection.end();
                if(data <= 10) {
                    console.log("Aun quedan habitaciones disponibles")
                } else {
                    console.log("No quedan habitaciones individuales disponibles")
                }
            });
    
            connection.query(checkeoReservasDobles, (err, data) => {
                if(err) throw err;
                console.log(data);
                //connection.end();
                if(data <= 10) {
                    console.log("Aun quedan habitaciones disponibles")
                } else {
                    console.log("No quedan habitaciones dobles disponibles")
                }
            }); */



        console.log(req.body);
        var huespedes = req.body.huespedes;
        var fecha_entrada = req.body.fecha_entrada;
        var fecha_salida = req.body.fecha_salida;
        var tipo_habitacion = req.body.tipo_habitacion;
        var precio;

        if (tipo_habitacion == "individual") {
            precio = 50;
            console.log("Has escogido una habitacion individual");
        } else if (tipo_habitacion == "doble") {
            console.log("Has escogido una habitacion doble");
            precio = 100;
        } else if (tipo_habitacion == "triple") {
            precio = 150;
            console.log("Has escogido una habitacion triple");
        }

        let insertQuery = `INSERT INTO Reservas (precio,huespedes,fecha_entrada,fecha_salida,tipo_habitacion)VALUES (?,?,?,?,?)`;
        let query2 = mysql.format(insertQuery, [precio, huespedes, fecha_entrada, fecha_salida, tipo_habitacion]);

        connection.query(query2, (err, response) => {
            if (err) throw err;
            console.log(response.insertId);

            //connection.end();
        });

        console.log(res);

        if (tipo_habitacion == "individual") {
            precio = 50;
            console.log("Has escogido una habitacion individual");
        } else if (tipo_habitacion == "doble") {
            console.log("Has escogido una habitacion doble");
            precio = 100;
        } else if (tipo_habitacion == "triple") {
            precio = 150;
            console.log("Has escogido una habitacion triple");
        }

        //Insertar Datos de Reserva en Historial.
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);
            var myobj = {
                precio: precio,
                huespedes: req.body.huespedes,
                fecha_entrada: req.body.fecha_entrada,
                fecha_salida: req.body.fecha_salida,
                tipo_habitacion: req.body.tipo_habitacion,
            }

            dbo.collection(coleccion2).insertOne(myobj, function (err, res) {
                if (err) throw err;
                console.log("Documento insertado");
                db.close();
            });
        });
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

    datoscontacto: (req, res) => {
        console.log(req.body);
        var nombre = req.body.nombre;
        var email = req.body.email;
        var telefono = req.body.telefono;
        var mensaje = req.body.mensaje;


        let insertQuery = `INSERT INTO Contacto (nombre,email,telefono,mensaje)VALUES (?,?,?,?)`;
        let query2 = mysql.format(insertQuery, [nombre, email, telefono, mensaje]);

        connection.query(query2, (err, response) => {
            if (err) throw err;
            console.log(response.insertId);

            //connection.end();
        });

        res.send("Formulario de contacto enviado correctamente")
        console.log(res);
    },

    historial: (req, res) => {

        //Ver todos 
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(mydb);

            dbo.collection(coleccion2).find({}).toArray(function (err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
                res.send(result)
            });
        });


    },


/*     cancelareservas: (req, res) => {
        console.log(req.body);
        var id_reserva = req.body.id_reserva;

        let deleteQuery = `DELETE from Reservas WHERE id = "${id_reserva}"`;
        connection.query(deleteQuery, (err, response) => {
            if (err) throw err;
            console.log(response);
            //connection.end();
        });

        res.send('Reserva Cancelada')
    }, */
}

module.exports = user;





