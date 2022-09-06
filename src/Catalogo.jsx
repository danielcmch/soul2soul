import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BarraNav from './componentes/barranav/BarraNav';
import Cat from "./componentes/catalogo/Cat";
import { Footer } from "./componentes/footer/Footer";


export function Catalogo() {
  return (
    <>
      <BarraNav />
      <Cat />
      <Footer />

    </>
  );
}

export default Catalogo;
