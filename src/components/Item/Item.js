import { Button, Card } from 'react-bootstrap';

export const Item = ( {producto} ) => {

    const { nombre, descripcion, precio, img, stock} = producto

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img}/>
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>{precio}</Card.Text>
                    <Card.Text> Stock disponible: {stock}</Card.Text>
                    <Card.Text> {descripcion}</Card.Text>
                    <Button variant="outline-primary">Ver más del producto!</Button>
                </Card.Body>
            </Card>
        </div>
    )
}