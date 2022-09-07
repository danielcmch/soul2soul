import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Artista from "./Artista";
import Nosotros from "./Nosotros";
import Inicio from "./Inicio";
import Catalogo from "./Catalogo";
import Login from "./Login";
import AdminP from "./AdminP";
import FormularioA from "./FormularioA";
import FormularioP from "./FormularioP";

export function App() {
  return (
    <Router>
        <Routes>
          <Route path="/contacto" element={<Artista/>} />
        </Routes>
        <Routes>
          <Route path="/nosotros" element={<Nosotros/>} />
        </Routes>
        <Routes>
          <Route path="/Catalogo" element={<Catalogo/>} />   
        </Routes>
        <Routes>
          <Route path="/Login" element={<Login/>} />   
        </Routes>
        <Routes>
          <Route path="/AdminP" element={<AdminP/>} />   
        </Routes>
        <Routes>
          <Route path="/FormularioA" element={<FormularioA/>} />   
        </Routes>
        <Routes>
          <Route path="/FormularioP" element={<FormularioP/>} />   
        </Routes>
        <Routes>
          <Route path="/" element={<Inicio/>} />   
        </Routes>
        
    </Router>
  );
}

export default App;
