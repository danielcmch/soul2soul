import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import carru1 from "./1.png";
import carru2 from "./2.png";
import carru3 from "./3.png";


class Slider extends React.Component {
    render() {
        return (
            <div className=" div1">
                <Carousel>
                    <Carousel.Item>
                        <img alt="herbo" className="d-block w-100" src={carru1} />
                        <Carousel.Caption>
                            <h3>Herbolaria</h3>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img alt="diem" className="d-block w-100" src={carru2} />
                        <Carousel.Caption>
                            <h3>DIEM</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img alt="chicarica" className="d-block w-100" src={carru3} />
                        <Carousel.Caption>
                            <h3>Chicarica</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
} export default Slider;
