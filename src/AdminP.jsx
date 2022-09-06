import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./adminprincipal.css"
import Adminprincipal from "./componentes/adminprincipal/adminprinicpal";
import { Footer } from "./componentes/footer/Footer";

function AdminP() {
  return (
    <> 
      <Adminprincipal/>
      <Footer/>
    </>
  );
}

export default AdminP;