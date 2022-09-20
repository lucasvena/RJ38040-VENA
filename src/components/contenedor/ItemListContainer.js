import { useEffect, useState } from "react";
import { pedirDatos } from "../../helpers/pedirDatos";
import { ItemList } from "../ItemList/ItemList";
import { Navigate, useParams } from 'react-router-dom';
import { useLoginContext } from "../../context/LogingContext";

export const ItemListContainer = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    
    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((prod) => prod.category === categoryId) )
                }
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])
    

    const {user} = useLoginContext()

    return (
        <>
            {
                user.logged
                ?
                    <div>
                        {
                            loading ? <h2>Cargando...</h2>
                            : <ItemList productos={productos}/>
                        }

                    </div>
                : <Navigate to="/login" />
            }
        </>
    )
}