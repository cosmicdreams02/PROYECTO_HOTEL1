//importar React y los elementos useState y useEffect.
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Componente Funcional.
function Pago() {
    const navigate = useNavigate();

    const [numTarjeta, setNumtarjeta] = useState("");



    // Función que se ejecuta cuando se aprieta el botón.
    const enviar = () => {
        console.log(`El titular de la tarjeta es  ${numTarjeta}`);





        const datosPago = {
            numTarjeta
        }


        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datosPago),
        };





        fetch("datostarjeta", requestOptions)
            .then((response) => response.json())
            .then((response) => {
                console.log(response) // Manejarlo con usseEffect para ver si esta bien o mal y pintarlo o no. 
            });
        navigate("/historial")

    };



    return (

        <div>
            <div className="col-lg-4 col-md-10 col-xs-12 mx-auto mt-4">
                <input type="text" className="tituTarjeta form-control mt-3" placeholder="Introduce el nombre del titular de la tarjeta" pattern="^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$" />
                <input type="number" className="numTarjeta form-control mt-3" placeholder="Introduce tu num de tarjeta" pattern="^[0-9]{16}$"
                    onChange={(e) => setNumtarjeta(e.target.value)} />
                <input type="text" className="cadTarjeta form-control mt-3" placeholder="01-2022" pattern="^[0-9]{2}-[0-9]{2}$" />
                <input type="number" className="cvv form-control mt-3" placeholder="Introduce el cvv" pattern="^[0-9]{3}$" />

                <input type="button" value="Enviar" className="btn btn-dark mt-3" onClick={() => enviar()} />
            </div>
        </div>
    )
};

//Exportar el componente
export default Pago;