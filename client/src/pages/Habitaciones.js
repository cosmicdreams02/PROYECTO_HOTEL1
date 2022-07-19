import React, { Component } from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

import habitacion1 from '../assets/habitacion1.jpg'
import habitacion2 from '../assets/habitacion2.jpg'
import habitacion3 from '../assets/habitacion3.jpg'

class Habitaciones extends Component {

    render() {
        return (

            <div>
                <CardGroup>
                    <Card className="mt-3">
                        <Card.Img variant="top" src= {habitacion1} />
                        <Card.Body>
                            <Card.Title>Habitacion Individual</Card.Title>
                            <Card.Text>
                                Si quieres viajar solo, la habitación individual responde a tus necesidades.

                                Tendrás el espacio suficiente que necesitas descansar durante tus viajes profesionales o de ocio.

                                También puede denominarse como habitación sencilla.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card className="mt-3">
                        <Card.Img variant="top" src= {habitacion2} />
                        <Card.Body>
                            <Card.Title>Habitacion Doble</Card.Title>
                            <Card.Text> 
                                La habitación doble es más grande y de capacidad superior.
                                En este tipo de habitaciones dispuestas para dos personas puede haber dos camas independientes o una cama de matrimonio. Suele ser utilizada por amigos.
                                En el segundo caso estaríamos hablando de una habitación de matrimonio, y tal y como su nombre indica, está preparada para hospedar a una pareja o matrimonio.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mt-3">
                        <Card.Img variant="top" src= {habitacion3} />
                        <Card.Body>
                            <Card.Title>Habitacion Triple</Card.Title>
                            <Card.Text>
                                La habitación triple es la más grande de todas.
                                En este tipo de habitaciones estan dispuestas para tres personas puede haber tres camas independientes o una cama de matrimonio y una independiente.
                                Suele ser utilizada para familias.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardGroup>

                
            </div>
        );
    }
}
export default Habitaciones





