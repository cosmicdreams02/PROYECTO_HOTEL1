import React, { Component } from "react"
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="http://www.hozting.id/templates/travel01/wp-content/uploads/2017/01/maldive-islands-04.jpeg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Where Home Feels Like an Escape</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="https://imtmonline.com/wp-content/uploads/2020/07/DJI_0394.jpg"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Enjoy your Trip</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src="https://img1.fonwall.ru/o/yw/maldivy-tropiki-more-kurort.jpg"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Welcome</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
export default Home
