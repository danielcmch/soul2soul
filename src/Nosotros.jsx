import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from './componentes/barranav/BarraNav';
import { Footer } from "./componentes/footer/Footer";
import Somos from "./componentes/somos/Somos";



function Nosotros() {
  return (
    <>
      <BarraNav/>
      <Somos/>
      <Footer/>
    </>
  );
}export default Nosotros;


