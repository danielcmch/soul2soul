import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';


class Cat extends React.Component {
    render() {
        return (
            <div className="div1">
                <Row>
                <h1 className="catTitulo">- </h1>
                    <Col className="col-md-2 catMarg">
                        <Row >
                            <h1 className="catTitulo">Artistas </h1>
                            <ListGroup variant="flush">
                            <ListGroup.Item className="list-group-item"></ListGroup.Item>
                                <ListGroup.Item className="list-group-item">Herbolaria</ListGroup.Item>
                                <ListGroup.Item className="listArt">Dapibus ac facilisis in</ListGroup.Item>
                                <ListGroup.Item className="listArt">Morbi leo risus</ListGroup.Item>
                                <ListGroup.Item className="listArt">Porta ac consectetur ac</ListGroup.Item>
                            </ListGroup>
                        </Row>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
            </div>
        );
    }
} export default Cat;