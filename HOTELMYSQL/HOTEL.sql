#DROP DATABASE Hotel;
CREATE DATABASE Hotel;
USE Hotel;

CREATE TABLE Clientes (
	id INT AUTO_INCREMENT,
    nombre VARCHAR(300) NOT NULL,
    dni CHAR(9) UNIQUE NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    codpostal VARCHAR (5) NOT NULL,
    email VARCHAR(100) unique NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);


CREATE TABLE Login(
	id INT AUTO_INCREMENT,
	contrasena VARCHAR(100) NOT NULL,
	email VARCHAR(100) unique NOT NULL,
	PRIMARY KEY(id),
	fk_id_clientes INT NOT NULL,
	FOREIGN KEY(fk_id_clientes) REFERENCES Clientes (id) ON UPDATE CASCADE ON DELETE CASCADE
);

DELIMITER //
CREATE TRIGGER ejemploAntesActualizar
after insert ON Clientes
FOR EACH ROW 
BEGIN
	INSERT INTO Login VALUES (NULL, new.email, new.contrasena,new.id);
    END //
DELIMITER ;

CREATE TABLE Reservas (
	id INT AUTO_INCREMENT,
    precio DOUBLE,
    huespedes VARCHAR(50) NOT NULL,
    fecha_entrada DATE,
    fecha_salida DATE,
    tipo_habitacion VARCHAR(50) NOT NULL,
    id_room INT,
    PRIMARY KEY(id)
);

CREATE TABLE Clientes_Reservas(
	id INT AUTO_INCREMENT,
    fk_id_clientes INT NOT NULL,
    fk_id_reservas INT NOT NULL,
	PRIMARY KEY(id),
    FOREIGN KEY(fk_id_clientes) REFERENCES Clientes (id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY(fk_id_reservas) REFERENCES Reservas (id) ON UPDATE CASCADE ON DELETE CASCADE
);


 CREATE TABLE DatosTarjeta(
	id INT AUTO_INCREMENT,
    numTarjeta  CHAR(16) NOT NULL,
	fk_id_clientes INT,
	PRIMARY KEY(id),
	FOREIGN KEY(fk_id_clientes) REFERENCES Clientes (id)
    );

CREATE TABLE Contacto(
	id INT AUTO_INCREMENT,
    nombre VARCHAR(300) NOT NULL,
	email VARCHAR(100) unique NOT NULL,
	telefono VARCHAR(15) NOT NULL,
	mensaje VARCHAR(2000) NOT NULL,
	PRIMARY KEY(id)
);

SELECT * FROM Clientes;
SELECT * FROM Login;
SELECT * FROM Reservas;
SELECT * FROM Datostarjeta;
SELECT * FROM Contacto;

SELECT * FROM Reservas WHERE tipo_habitacion = "individual"  AND  fecha_entrada  between "2022-07-16" AND sysdate();
SELECT * FROM Reservas WHERE tipo_habitacion = "individual"  AND  fecha_entrada  between "2022-07-16" AND sysdate();
SELECT * FROM Reservas WHERE tipo_habitacion = "individual"  AND  fecha_entrada  between "2022-07-16" AND sysdate();


SELECT  COUNT(*) FROM Reservas WHERE tipo_habitacion = "individual";
SELECT  COUNT(*) FROM Reservas WHERE tipo_habitacion = "doble";
SELECT  COUNT(*) FROM Reservas WHERE tipo_habitacion = "triple"