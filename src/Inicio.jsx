import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from './componentes/barranav/BarraNav';
import Slider from './componentes/slider/Slider';
import CircArt from "./componentes/circart/CircArt";
import { Footer } from "./componentes/footer/Footer";

function Inicio() {
  return (
    <>
    <div className=""> 
      <BarraNav/>
      <Slider/>
      <CircArt/>
      <Footer/>
      </div>
    </>
  );
}

export default Inicio;
