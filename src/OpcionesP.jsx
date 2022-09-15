import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminprincipal.css"
import Productosopciones from "./componentes/productosopciones/productosopciones";
import { Footer } from "./componentes/footer/Footer";

function OpcionesP() {
  return (
    <> 
      <Productosopciones/>
      <Footer/>
    </>
  );
}

export default OpcionesP;