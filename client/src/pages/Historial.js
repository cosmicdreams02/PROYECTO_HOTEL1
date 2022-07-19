//importar React y los elementos useState y useEffect.
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';





//Componente Funcional.
function Historial() {

    const [historial, setHistorial] = useState([]);
    useEffect(() => {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            }),
        };

        fetch('historial', requestOptions)
            .then(res => res.json())
            .then(res => {
                setHistorial(res);
                console.log(res)

            })
            .catch(err => {
                console.log(err)
            }
            );


    }, []);
    console.log(historial)

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
                console.log(response) 
            });
        navigate("/reservas")

    };

    return (

        <div className="historial">

            {historial ? historial.map((historial, i) => {
                return (

                    <div className="col-lg-2 col-md-10 col-xs-12 mx-auto mt-4">
                        <Card style={{ width: '24.5rem' }}>
                            <Card.Body >
                                
                                <Card.Text>Numero de huespedes: {historial.numerodehuspedes}</Card.Text>
                                <Card.Text>Fecha de ingreso: {historial.fechaingreso}</Card.Text>
                                <Card.Text>Fecha de salida: {historial.fechasalida}</Card.Text>
                                <Card.Text>Tipo de habitacion: {historial.type}</Card.Text>
                            </Card.Body>
                        </Card>
                        <div className="col-lg-6 col-md-10 col-xs-12 mx-auto mt-4">
                            <input type="text" className="id_reserva form-control mt-3" placeholder="Introduce el id de tu reserva" onChange={(e) => setId_reserva(e.target.value)} />
                            <input type="button" value="Cancelar Reserva " className="btn btn-dark mt-3" onClick={() => deleteReserva()} />
                        </div>

                    </div>
                )
            }) : <div>Cargando...</div>};
        </div>
    )
}


//Exportar el componente
export default Historial;


