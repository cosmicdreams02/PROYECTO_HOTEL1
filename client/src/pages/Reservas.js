//importar React y los elementos useState y useEffect.
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";


//Componente Funcional.
function Reservas() {
    const navigate = useNavigate();

    // Estados para huespedes, fecha_entrada, fecha_salida, tipo_habitacion.
    const [huespedes, setHuespedes] = useState("");
    const [fecha_entrada, setFecha_entrada] = useState("");
    const [fecha_salida, setFecha_salida] = useState("");
    const [tipo_habitacion, setTipo_habitacion] = useState("");





    // Función que se ejecuta cuando se aprieta el botón.
    const enviar = () => {
        console.log(`El numero de huespedes es ${huespedes} fech entrada  ${fecha_entrada}  salida ${fecha_salida}  el tipo de habitacion es ${tipo_habitacion}`);





        const datosLogin = {
            huespedes,
            fecha_entrada,
            fecha_salida,
            tipo_habitacion
        }


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosLogin),
        };





        fetch("reservas", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                console.log(response) 
            });
 
            navigate("/pago")

    };



    return (

        <div>
            <div className="col-lg-4 col-md-10 col-xs-12 mx-auto mt-4">
                <input type="text" className="huespedes form-control mt-3" placeholder="Introduce el numero de huespedes" onChange={(e) => setHuespedes(e.target.value)} />
                <input type="date" className="fecha_entrada form-control mt-3" placeholder="Introduce tu fecha de entrada" onChange={(e) => setFecha_entrada(e.target.value)} />
                <input type="date" className="fecha_salida form-control mt-3" placeholder="Introduce tu fecha de salida" onChange={(e) => setFecha_salida(e.target.value)} />

                <label for="habitaciones"></label>
                <select className="tipo_habitacion form-control mt-3" onChange={(e) => setTipo_habitacion(e.target.value)}>
                    <option value="Escoger">Escoge tipo de habitacion</option>
                    <option value="individual">Individual</option>
                    <option value="doble">Doble</option>
                    <option value="triple">Triple</option>
                </select>
                <input type="button" value="Enviar" className="btn btn-dark mt-3" onClick={() => enviar()} />
            </div>


        </div>
    )
};

//Exportar el componente
export default Reservas;
