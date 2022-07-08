//importar React y los elementos useState y useEffect.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


//Componente Funcional.
function Historial() {
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    const navigate = useNavigate();

    // Estado para el id_reserva.

    const [id_reserva, setId_reserva] = useState("");

    
    // Función que se ejecuta cuando se aprieta el botón.
    const deleteReserva = () => {
        console.log(`Su id_reserva es  ${id_reserva}`);

        const borradoReserva = {
            id_reserva,
        }
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(borradoReserva),
        };



        fetch("cancelareservas", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                console.log(response) // Manejarlo con usseEffect para ver si esta bien o mal y pintarlo o no. 
            });
        navigate("/reservas")

    };


    return (

        <div>
            <div className="col-lg-4 col-md-10 col-xs-12 mx-auto mt-4">
                <input type="text" className="id_reserva form-control mt-3" placeholder="Introduce el id de tu reserva" onChange={(e) => setId_reserva(e.target.value)} />
                <input type="button" value="cancelarReserva " className="btn btn-dark mt-3" onClick={() => deleteReserva()} />
            </div>
        </div>
    )
};

//Exportar el componente
export default Historial;
