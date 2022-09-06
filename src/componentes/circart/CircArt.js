import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import herb from "./Herb.jpeg";
import diem from "./DIEM.jpeg";
import masta from "./Mastaroi.jpeg";
import George from "./George rhoats.jpeg";

class CircArt extends React.Component{
    render(){
        return(
            <div className=" div1">
        <h1 className="artistas">ARTISTAS</h1>
        <Row>
          <Col>
            <img alt="herbolaria" className="imagencircular" src={herb} />
            <a className="textoimagen1" href="#herbolaria">
              Herbolaria
            </a>
          </Col>
          <Col>
            <img alt="diem" className="imagencircular" src={diem} />
            <a className="textoimagen2" href="#DIEM">
              DIEM
            </a>
          </Col>
          <Col>
            <img alt="masta" className="imagencircular" src={masta} />
            <a className="textoimagen3" href="#masta">
              Masta Roi
            </a>
          </Col>
          <Col>
            <img alt="george" className="imagencircular" src={George} />
            <a className="textoimagen4" href="#george">
              George Rhoads
            </a>
          </Col>
        </Row>
      </div>
        );
    }
}export default CircArt;