import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const Item = ( {producto} ) => {

    const { id, nombre, descripcion, precio, img, stock} = producto

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{precio}</Card.Text>
                    <Card.Text> Stock disponible: {stock}</Card.Text>
                    <Card.Text> {descripcion}</Card.Text>
                    <Link to={`/item/${id}`} variant="outline-primary">Ver más del producto!</Link>
                </Card.Body>
            </Card>
        </div>
    )
}