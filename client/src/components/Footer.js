import React from "react"
import { Link } from 'react-router-dom';

//Componente Clase
function Footer() {

    return (

        <div>
            <div class="col-12">
                <footer  class="py-3 my-4 fijar">
                    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                        <li class="link1"><Link to="/home">Home</Link></li>
                        <li class="link1"><Link to="/registro">Registro</Link></li>
                        <li class="link1"><Link to="/login">Login</Link></li>
                        <li class="link1"><Link to="/habitaciones">Habitaciones</Link></li>
                        <li class="link1"><Link to="/galeria">Galeria</Link></li>
                        <li class="link1"><Link to="/contacto">Contacto</Link></li>
                        <li class="link1"><Link to="/historial">Historial</Link></li>
                        <li class="link1"><Link to="/reservas">Reservas</Link></li>
                        <li class="link1"><Link to="/pago">Pago</Link></li>
                    </ul>
                    <p class="text-center text-muted">© 2022 Cosmic Dreams, Inc</p>
                </footer>
            </div>
        </div>
    )
}

//Exportar el componente
export default Footer;