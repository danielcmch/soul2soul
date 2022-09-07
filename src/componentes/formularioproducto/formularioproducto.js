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

function Formularioproducto() {
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
                                Añadir Producto
                            </a>
                        </div>
                    </div>
                </Nav>
            </Nav>


            <Container>
                <h3 className=" fuenteartista">Ingrese la información del producto</h3>
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

                        <Form className='mas mas3'>
                            
                            <Form.Group className="mb-3" controlId="formNombre">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" name="formNombre" placeholder="Ingresa el nombre de producto" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formDescripcion">
                                <Form.Label>Descripción</Form.Label>
                                <Form.Control type="text" name="formDescripcion" placeholder="Ingresa la descripción del producto" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formCantidad">
                                <Form.Label>Cantidad</Form.Label>
                                <Form.Control type="number" name="formCantdad" placeholder="Ingresa cantidad de piezas" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formPrecio">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control type="number" name="formPrecio" placeholder="Ingresa precio del producto" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formImagenP">
                                <Form.Label>Imagen Principal</Form.Label>
                                <Form.Control type="file" name="formImagenP"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formImagenS1">
                                <Form.Label>Imagen 2</Form.Label>
                                <Form.Control type="file" name="formImagenS1"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formImagenS2">
                                <Form.Label>Imagen 3</Form.Label>
                                <Form.Control type="file" name="formImagenS2"/>
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

export default Formularioproducto;