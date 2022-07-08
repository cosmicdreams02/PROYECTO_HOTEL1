import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "../pages/Home";
import Registro from "../pages/Registro";
import Login from "../pages/Login";
import Habitaciones from "../pages/Habitaciones";
import Galeria from "../pages/Galeria";
import Contacto from "../pages/Contacto";
import Historial from "../pages/Historial";
import Reservas from "../pages/Reservas";
import Pago from "../pages/Pago";
import Footer from "./Footer";



class Main extends Component {

    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/registro" element={<Registro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/habitaciones" element={<Habitaciones />} />
                    <Route path="/galeria" element={<Galeria />} />
                    <Route path="/contacto" element={<Contacto />} />
                    <Route path="/historial" element={<Historial />} />
                    <Route path="/reservas" element={<Reservas />} />
                    <Route path="/pago" element={<Pago />} />
                </Routes>
                <div>
                 <Footer />
                </div>
            </div>
        );
    }
}
export default Main;