import { Navbar, Nav, Container } from 'react-bootstrap';
import React from "react"
import { Link } from 'react-router-dom';



//Componente Clase
function NavbarComponente() {

    return (
        <div>
            <Navbar className='background' expand="lg">
                <Container className="col-12">
                    <Navbar.Brand href="#home">Cosmic Dreams Hotel</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="link"> <Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/registro">Registro</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/login">Login</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/login">Habitaciones</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/galeria">Galeria</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/contacto">Contacto</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/historial">Historial</Link></Nav.Link>
                            <Nav.Link className="link btn btn-primary reservacolor"> <Link to="/reservas">Reservas</Link></Nav.Link>
                            <Nav.Link className="link"> <Link to="/pago">Pago</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    )
}

//Exportar el componente
export default NavbarComponente;



<ul>
    <li>
        <Link to="/home">Home</Link>
    </li>
</ul>