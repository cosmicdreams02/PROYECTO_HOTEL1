//importar React y los elementos useState y useEffect.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

//Componente Funcional.
function Registro() {
    const navigate = useNavigate();

    // Estados para el nombre, apellidos, dni, telefono, codpostal, email, contrasena.
    const [nombre, setNombre] = useState("");
    const [dni, setDni] = useState("");
    const [telefono, setTelefono] = useState("");
    const [codpostal, setCodpostal] = useState("");
    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");


    // Función que se ejecuta cuando se aprieta el botón.
    const enviar = () => {
        console.log(`Su nombre es ${nombre} con dni  ${dni}  telefono ${telefono} codpostal ${codpostal} email ${email} contraseña  ${contrasena}`);

        const datosRegistro = {
            nombre,
            dni,
            telefono,
            codpostal,
            email,
            contrasena
        }


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosRegistro),
        };




        fetch("registro", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                console.log(response) // Manejarlo con usseEffect para ver si esta bien o mal y pintarlo o no. 
            });
        navigate("/login")

    };


    return (

        <div>
            <div className="col-lg-4 col-md-10 col-xs-12 mx-auto mt-4">
                <input type="text" className="nombre form-control mt-3" placeholder="Nombre" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$"
                    onChange={(e) => setNombre(e.target.value)} />

                <input type="text" className="dni form-control mt-3" placeholder="Introduce tu DNI ej. 12345678A" pattern="(^[0-9]{8})([-]?)([A-Za-z]{1})$"
                    onChange={(e) => setDni(e.target.value)} />
                <input type="tel" className="telefono form-control mt-3" placeholder="Introduce tu Número ej. 681081123" pattern="[0-9]{9}"
                    onChange={(e) => setTelefono(e.target.value)} />
                <input type="number" className="codpostal form-control mt-3" placeholder="Introduce tu CP" pattern="^[0-9]{5}"
                    onChange={(e) => setCodpostal(e.target.value)} />
                <input type="email" className="email form-control mt-3" placeholder="Introduce tu email Ej: 02sergioconde@gmail.com" pattern="^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$"
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="contrasena form-control mt-3" placeholder="Introduce tu contraseña Ej:Aa1-sergio" pattern="^(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*"
                    onChange={(e) => setContrasena(e.target.value)} />
                <input type="button" value="Enviar" className="btn btn-dark mt-3" onClick={() => enviar()} />

            </div>



        </div>
    )
}


//Exportar el componente
export default Registro;


