import React, { Component } from "react"

class Galeria extends Component {

    render() {
        return (
            <div>
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="https://www.traveldailymedia.com/assets/2019/09/InterContinental-Maldives-Maamunagau-Resort-1.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                        />

                        <img
                            src="https://adoremaldivas.es/wp-content/uploads/2019/07/Baros-Maldives-Restaurante-Cayenne.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://www.welgrowgroup.com/blog/wp-content/uploads/2017/04/maldive-beach.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                        />

                        <img
                            src="https://assets.maldives.com/wp-content/uploads/2019/04/Noku-Maldives-1920x1080.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://gocheepnow.com/wp-content/uploads/2020/03/Sunset-Maldives.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                        />

                        <img
                            src="https://www.themaldivesexpert.com/wp-content/uploads/2019/02/6.1.1_proposals_01.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default Galeria