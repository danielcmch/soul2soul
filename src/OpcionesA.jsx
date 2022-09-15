import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminprincipal.css"
import Artistasopciones from "./componentes/artistasopciones/artistasopciones";
import { Footer } from "./componentes/footer/Footer";

function OpcionesA() {
  return (
    <> 
      <Artistasopciones/>
      <Footer/>
    </>
  );
}

export default OpcionesA;