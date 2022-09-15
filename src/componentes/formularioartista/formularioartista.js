import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';
import { Formik } from 'formik';
import Nav from "react-bootstrap/Nav";
import Logo from "./Logo.png";
import Container from 'react-bootstrap/Container';


const schema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    username: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    file: yup.mixed().required(),
    terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

function Formularioartista() {
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
                                Artista
                            </a>
                        </div>
                    </div>
                </Nav>
            </Nav>


            <Container>
                <h3 className=" fuenteartista">Ingrese la información del artista</h3>
                <Formik
                    validationSchema={schema}
                    onSubmit={console.log}
                    initialValues={{
                        formNombre: '',
                        lastName: 'Otto',
                        username: '',
                        city: '',
                        state: '',
                        zip: '',
                        file: null,
                        terms: false,
                    }}
                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        touched,
                        isValid,
                        errors,
                    }) => (

                        <Form className='mas mas2'>
                            
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="formNombre" placeholder="Ingresa el nombre" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Correo electrónico</Form.Label>
                                <Form.Control type="email" name="formEmail" placeholder="Ingresa el correo electrónico" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Contraseña</Form.Label>
                                <Form.Control type="password" name="formPassword" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Validar" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Añadir
                            </Button>
                        </Form>
                    )}
                </Formik>
            </Container>
        </div>
    );
}

export default Formularioartista;