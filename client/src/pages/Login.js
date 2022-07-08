//importar React y los elementos useState y useEffect.
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";


//Componente Funcional.
function Login() {
    const navigate = useNavigate();

    // Estados para el  email, contrasena.

    const [email, setEmail] = useState("");
    const [contrasena, setContrasena] = useState("");



    // Función que se ejecuta cuando se aprieta el botón.
    const enviar = () => {
        console.log(`Su email es ${email} y la contraseña  ${contrasena}`);
    

    const datosLogin = {
        email,
        contrasena
    }


    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datosLogin),
    };



    fetch("login", requestOptions)
    .then((response) => response.json())
    .then((response) => {
        console.log(response) // Manejarlo con usseEffect para ver si esta bien o mal y pintarlo o no. 
    });
    navigate("/reservas")

};



    return (

        <div>

            <div className="col-lg-4 col-md-10 col-xs-12 mx-auto mt-4">
                <input type="email" className="email form-control mt-3" placeholder="Introduce tu email Ej: 02sergioconde@gmail.com" pattern="^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$"
                    onChange={(e) => setEmail(e.target.value)} />
                <input type="password" className="contrasena form-control mt-3" placeholder="Introduce tu contraseña Ej:Aa1-sergio" pattern="^(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*"
                    onChange={(e) => setContrasena(e.target.value)} />

                <input type="button" value="Enviar" className="btn btn-dark mt-3" onClick={() => enviar()} />
            </div>


        </div>
    )
};

//Exportar el componente
export default Login;