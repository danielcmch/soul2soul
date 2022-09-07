import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import merch from './merch1.jpg'
import Badge from 'react-bootstrap/Badge';


class Cat extends React.Component {
    render() {
        return (

            <div className="divCat">
                <Row>
                    <h1 className="sepCat">- </h1>
                    <Col className="col-md-2 catMarg">
                        <Row >
                            <h1 className="catMarg">Artistas </h1>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="list-group-item"></ListGroup.Item>
                                <ListGroup.Item className="list-group-item">Herbolaria
                                <Badge bg="success" pill>
                                    14
                                </Badge>
                                </ListGroup.Item>

                                <ListGroup.Item className="listArt">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="listArt">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="listArt">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Col>

                    <Col>
                        <h1 className="catMarg">Productos </h1>
                        <Row xs={1} md={4} className="g-4">
                            {Array.from({ length: 16 }).map((_, idx) => (
                                <Col>
                                    <Card>
                                        <Card.Img variant="top" src={merch} />
                                        <Card.Body>
                                            <Card.Title className="catMarg">Hoodie Stray Kids</Card.Title>
                                            <Card.Text className="catCont">
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                        <Card.Footer>
                                            <small className="text-muted">Quedan # piezas</small>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </div>

        );
    }
} export default Cat;