import { useEffect, useState } from "react";
// import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Loader } from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";



export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    useEffect (() => {

        setLoading(true)

        const itemRef = doc(db, 'productos', itemId)

        getDoc(itemRef)
            .then((doc) => {
               setItem({id: doc.id, ...doc.data()}) 
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() =>{
                setLoading(false)
            })
        // pedirDatos()
        //     .then((resp) =>{
        //         setItem( resp.find((prod) => prod.id === Number(itemId)) )
        //     })
        //     .catch( err => console.log(err))
        //     .finally(() =>{
        //         setLoading(false)
        //     })
        // setear el estado con un único producto

    }, [itemId])

    return (
        <div>
            
            {
                loading
                ? <Loader/>
                : <ItemDetail item={item} />
            }

        </div>
    )


}