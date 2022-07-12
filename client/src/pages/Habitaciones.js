import React, { Component } from "react"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

class Habitaciones extends Component {

    render() {
        return (

            <div>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src="https://www.hotelpaseodegracia.es/wp-content/uploads/2015/05/Hotel-Paseo-de-Gracia-Barcelona-18.jpg" />
                        <Card.Body>
                            <Card.Title>Habitacion Individual</Card.Title>
                            <Card.Text>
                                Si quieres viajar solo, la habitación individual responde a tus necesidades.

                                Tendrás el espacio suficiente que necesitas descansar durante tus viajes profesionales o de ocio.

                                También puede denominarse como habitación sencilla.
                            </Card.Text>
                        </Card.Body>

                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://i.pinimg.com/originals/d3/2a/c2/d32ac207fd02dbbdc3ee5038071e38d2.jpg" />
                        <Card.Body>
                            <Card.Title>Habitacion Doble</Card.Title>
                            <Card.Text>
                                La habitación doble es más grande y de capacidad superior.
                                En este tipo de habitaciones dispuestas para dos personas puede haber dos camas independientes o una cama de matrimonio. Suele ser utilizada por amigos.
                                En el segundo caso estaríamos hablando de una habitación de matrimonio, y tal y como su nombre indica, está preparada para hospedar a una pareja o matrimonio.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src="https://www.evernests.com/wp-content/uploads/2020/10/superior-triple-room-1-768x510.jpg" />
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





