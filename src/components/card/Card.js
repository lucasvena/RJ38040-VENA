import { Button, Card, Col, Row } from 'react-bootstrap';
import './Card.css';

const Cardcard = ( {anillos} ) => {

    const {nombre, descripcion, medida} = anillos

    return (
        <Row md={4} className="g-4 m-3">
            <Col>
                <Card>
                    <Card.Img variant="top" src="/assets/01.avif"/>
                    <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>{descripcion}</Card.Text>
                        <Card.Text>{medida}</Card.Text>
                        <Button variant="outline-primary">Comprar!</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

export default Cardcard