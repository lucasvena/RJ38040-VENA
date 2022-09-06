import { Card } from "react-bootstrap"


export const ItemDetail = ({item}) => {

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={item.img}/>
                <Card.Body>
                    <Card.Title>{item.nombre}</Card.Title>
                    <Card.Text>{item.descripcion}</Card.Text>
                    <Card.Text> {item.category}</Card.Text>
                    <Card.Text> {item.precio}</Card.Text>
                </Card.Body>
            </Card>            
        </div>
    )

}