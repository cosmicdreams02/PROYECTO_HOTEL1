
//importar React y los elementos useState y useEffect.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Componente Funcional.
function Contacto() {
    const navigate = useNavigate();

    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [mensaje, setMensaje] = useState("");



    // Función que se ejecuta cuando se aprieta el botón.
    const enviar = () => {
        console.log(` Nombre  ${nombre} con email ${email} telefono ${telefono} mensaje ${mensaje}`) ;
 

        const datosContacto = {
            nombre,
            email,
            telefono,
            mensaje
        }


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosContacto),
        };





        fetch("datoscontacto", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
            });
        navigate("/home")

    };



    return (
        <div className="col-lg-4 col-md-10 col-xs-12 mx-auto mt-4">
            <input type="text" className="nombre form-control mt-3" placeholder="Nombre" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$"
                onChange={(e) => setNombre(e.target.value)} />
            <input type="email" className="email form-control mt-3" placeholder="Introduce tu email Ej: 02sergioconde@gmail.com" pattern="^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$"
                onChange={(e) => setEmail(e.target.value)} />
            <input type="tel" className="telefono form-control mt-3" placeholder="Introduce tu Número ej. 681081123" pattern="[0-9]{9}"
                onChange={(e) => setTelefono(e.target.value)} />
            <input type="text" className="mensaje form-control mt-3" placeholder="Introduce tu mensaje" onChange={(e) => setMensaje(e.target.value)} />
            <input type="button" value="Enviar" className="btn btn-dark mt-3" onClick={() => enviar()} />
        </div>
    )
};

//Exportar el componente
export default Contacto; 