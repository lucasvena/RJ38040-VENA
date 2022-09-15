import { useEffect, useState } from "react";
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../ItemDetail/ItemDetail";



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect (() => {

        setLoading(true)

        pedirDatos()
            .then((resp) =>{
                setItem( resp.find((prod) => prod.id === Number(itemId)) )
            })
            .catch( err => console.log(err))
            .finally(() =>{
                setLoading(false)
            })
        // setear el estado con un único producto

    }, [itemId])

    return (
        <div>
            
            {
                loading
                ? <h2>Cargando...</h2>
                : <ItemDetail item={item} />
            }

        </div>
    )


}