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
                    <Card.Text><strong>$ {precio}</strong></Card.Text>
                    <Card.Text> Stock disponible: {stock}</Card.Text>
                    <Card.Text> {descripcion}</Card.Text>
                    {
                        stock > 0
                        ? <Link to={`/item/${id}`} className="btn btn-outline-primary">Ver más!</Link>
                        : <Card.Text className='btn btn-outline-danger'>Sin Stock</Card.Text>
                    }
                </Card.Body>
            </Card>
        </div>
    )
}