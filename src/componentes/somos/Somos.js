import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ReactPlayer from 'react-player';
import vid from "./video.mp4";


class Somos extends React.Component {
    render() {

        return (
            <div className=" div1">
                <br />
                <h1 className="nosotros">¿QUIENES SOMOS?</h1>
                <div class="row">

                    <div class="col-md-5">
                        <video loop autoPlay muted
                        width="95%"
                        height="95%"
                        >
                            <source src={vid} type="video/mp4" />
                        </video>
                    </div>
                    <div class="fuente col-md-7">
                        Soul2soul surge como una propuesta que busca fomentar el arte y la
                        cultura dentro de nuestro país.
                        <br /> Apoyando a artistas independientes a promover su producto o
                        "merch" como es conocido en el medio, de una manera más segura,
                        eficiente y disponible.
                        <br />
                        <br />
                        ¿Quieres conocer más del arte en el país?
                        <br />
                        <br />
                        <Button variant="outline-dark">
                            Ir ahora
                        </Button>
                    </div>
                </div>

            </div>

        );
    }
} export default Somos;