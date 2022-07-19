import React, { Component } from "react"
import resort from '../assets/resort.jpg'
import resort1 from '../assets/resort1.jpg'
import playa from '../assets/playa.jpg'
import landscape from '../assets/landscape.jpg'
import playa2 from '../assets/playa2.jpg'
import fuego from '../assets/fuego.jpg'





class Galeria extends Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0 mt-3" >
                        <img
                            src= {resort}
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt=""

                        />

                        <img
                            src={resort1}
                            class="w-100 shadow-1-strong rounded mb-4 "
                            alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={playa}
                            class="w-100 shadow-1-strong rounded mb-4 mt-3"
                            alt=""
                        />

                        <img
                            src={landscape}
                            class="w-100 shadow-1-strong rounded mb-4 "
                            alt=""
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src={playa2}
                            class="w-100 shadow-1-strong rounded mb-4 mt-3"
                            alt=""
                        />

                        <img
                            src={fuego}
                            class="w-100 shadow-1-strong rounded mb-4 "
                            alt=""
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Galeria