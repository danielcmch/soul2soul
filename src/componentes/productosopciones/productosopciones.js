import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo.png";

class Productosopciones extends React.Component {

    render() {
        return (
            <div className="div1">
                <Nav className="fondonav navbar-expand-md navbar">
                    <a href="/AdminP" class="navbar-band">
                        <img src={Logo} className="imagen" width="120" height="80" />
                    </a>
                    <Nav className="me-auto">
                        <div class="collapse navbar-collapse" id="mainNav">
                            <div class="nav ms-auto text-dark">
                                <a className="administrador">
                                    Menú Productos
                                </a>
                            </div>
                        </div>
                    </Nav>
                </Nav>

                <div className=" menos Auth-form-container ">

                    <form className="Auth-form">
                    <div className="artistas1" style={{ textAlign: "center" }}>
                    <h2 className="">Elige una opción</h2>
                </div>
                        <div className="Auth-form-content">
                            <div className="form-group mt-3" style={{ textAlign: "center" }}>
                                <a className="artistas" href="/AdminA">
                                    Ver
                                </a>
                            </div>
                            <div className="form-group mt-3" style={{ textAlign: "center" }}>
                                <a className="productos" href="/FormularioP">
                                    Añadir
                                </a>
                            </div>
                            <div className="form-group mt-3" style={{ textAlign: "center" }}>
                                <a className="reportes" href="/FormularioP">
                                    Editar
                                </a>
                            </div>
                            <div className="form-group mt-3" style={{ textAlign: "center" }}>
                                <a className="ventas" href="/AdminV">
                                    Eliminar
                                </a>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        );
    }
} export default Productosopciones;