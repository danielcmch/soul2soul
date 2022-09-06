import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo.png";


class Iniciosesion extends React.Component {

  render() {
    return (
      <div className="div1">
        <Nav className="fondonav navbar-expand-md navbar">
          <a href="/" class="navbar-band">
            <img src={Logo} className="imagen" width="120" height="80" />
          </a>
        </Nav>

        <div className="menos Auth-form-container">
          <form className="Auth-form">
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">Iniciar Sesión</h3>
              <div className="form-group mt-3">
                <label>Correo electrónico</label>
                <input
                  type="email"
                  className="form-control mt-1"
                  placeholder="Ingrese su correo electrónico"
                />
              </div>
              <div className="form-group mt-3">
                <label>Contraseña</label>
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Ingrese su contraseña"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button onClick={"/Inicio"} type="submit" className="btn btn-primary">
                  Ingresar
                </button>
              </div>
              <p className="forgot-password text-right mt-2">
                <a className="contrasena" href="#">
                  ¿Olvidaste tu contraseña?
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
} export default Iniciosesion;