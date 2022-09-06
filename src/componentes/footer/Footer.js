import React from 'react';
import { CDBFooter, CDBFooterLink, CDBBtn, CDBIcon, CDBContainer, CDBBox } from 'cdbreact';
import Nav from "react-bootstrap/Nav";
import Logo1 from "./Logo_S2S_Corchetes.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEnvelope } from "react-icons/fa";

export const Footer = () => {
    return (
        <CDBFooter className="div1">
            <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
                <CDBBox
                    display="flex"
                    justifyContent="center"
                    style={{ width: '100%' }}
                    className="mx-auto mt-4"
                >
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab spin icon="facebook-f" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="mx-3 p-2">
                        <CDBIcon fab spin icon="google" />
                    </CDBBtn>
                    <CDBBtn flat color="dark" className="p-2">
                        <CDBIcon fab spin icon="instagram" />
                    </CDBBtn>
                </CDBBox>
                <small className="text-center mt-5 cardgroup">Soul2Soul, 2022.</small>
                <a href="https://mdbootstrap.com/%22%3EMDBootstrap.com" className="text-center mt-5 cardgroup1">Terminos y condiciones .</a>
            </CDBBox>
            <Nav className="div1">
                <img src={Logo1} className="imagen6" height="30" />
                <img src={Logo1} className="imagen6" height="30" />
                <img src={Logo1} className="imagen5" height="30" />
                <img src={Logo1} className="imagen2" height="30" />
                <img src={Logo1} className="imagen4" height="30" />
                <img src={Logo1} className="imagen3" height="30" />
                <img src={Logo1} className="imagen1" height="30" />
                <img src={Logo1} className="imagen3" height="30" />
                <img src={Logo1} className="imagen4" height="30" />
                <img src={Logo1} className="imagen2" height="30" />
                <img src={Logo1} className="imagen5" height="30" />
                <img src={Logo1} className="imagen6" height="30" />
                <img src={Logo1} className="imagen6" height="30" />
            </Nav>
        </CDBFooter>
    );
};