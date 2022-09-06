import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminprincipal.css"
import "./formularioartista.css"
import Formularioartista from "./componentes/formularioartista/formularioartista";
import { Footer } from "./componentes/footer/Footer";

function FormularioA() {
  return (
    <> 
      <Formularioartista/>
      <Footer/>
    </>
  );
}

export default FormularioA;