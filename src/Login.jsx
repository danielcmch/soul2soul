import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import "./style.css";
import Iniciosesion from "./componentes/login/iniciosesion";
import { Footer } from "./componentes/footer/Footer";

function Login() {
  return (
    <> 
      <Iniciosesion/>
      <Footer></Footer>
    </>
  );
}

export default Login;