import React, { Component } from "react"
import Carousel from 'react-bootstrap/Carousel';

import home1 from '../assets/home1.jpg'
import home2 from '../assets/home2.jpg'
import home3 from '../assets/home3.jpg'



class Home extends Component {

    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={home1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Where Home Feels Like an Escape</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src= {home2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Enjoy your Trip</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src={home3}
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
