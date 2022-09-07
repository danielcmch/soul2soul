import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./formularioartista.css";
import Formularioproducto from "./componentes/formularioproducto/formularioproducto";
import { Footer } from "./componentes/footer/Footer";

function FormularioP() {
  return (
    <> 
      <Formularioproducto/>
      <Footer/>
    </>
  );
}

export default FormularioP;