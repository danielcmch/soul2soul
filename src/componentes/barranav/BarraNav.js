import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo.png";

class BarraNav extends React.Component {
    
    render(){
    return (
        <div className="div1">
          <Nav className="fondonav navbar-expand-md navbar">
            <a href="/" class="navbar-band">
              <img src={Logo} className="imagen" width="120" height="80"  />
            </a>
            <Nav className="me-auto">
              <div class="collapse navbar-collapse" id="mainNav">
                <div class="nav ms-auto text-dark">
                  <a className="navnuevo" href="/">
                    Inicio
                  </a>
                  <a className="navnuevo1" href="/Nosotros">
                    Nosotros
                  </a>
                  <a className="navnuevo" href="/Artista">
                    Artistas
                  </a>
                  <a className="navnuevo1" href="/Login">
                    FAQ
                  </a>
                  <a className="navnuevo1" href="Catalogo">
                    Productos
                  </a>
                </div>
              </div>
            </Nav>
          </Nav>
        </div>
        );
        }
    } export default BarraNav;