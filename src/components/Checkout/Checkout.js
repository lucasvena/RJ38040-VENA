import { useState } from "react"
import { Navigate } from "react-router-dom"
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from "../../firebase/config"

export const Checkout = () => {

    const {cart, cartTotal, terminarCompra } = useCartContext()

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: '',
    })

    const handleInputChange = (e) => {
        
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: cartTotal()
        }
        
        if (values.nombre.length <= 2) {
            alert("Nombre incorrecto")
            return
        }
        if (values.email.length <= 2) {
            alert("Email incorrecto")
            return
        }

        const ordenesRef = collection(db, 'ordenes')

        cart.forEach((item) => {
            const docRef = doc(db, 'productos', item.id)

            getDoc(docRef)
                .then((doc) => {

                    updateDoc(docRef, {
                        stock: doc.data().stock - item.cantidad
                    })
                })

        })

        addDoc(ordenesRef, orden)
        .then((doc) => {
            console.log(doc.id)
            terminarCompra(doc.id)
        })
    }

    if(cart.length === 0){
        return <Navigate to="/"/>
    }

    return(
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>
                
            <form className="style-form" onSubmit={handleSubmit}>
                <input
                    name="nombre"
                    onChange={handleInputChange} 
                    value={values.nombre}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Tu nombre"
                />

                <input
                    name="email"
                    onChange={handleInputChange} 
                    value={values.email}
                    type={'email'}
                    className="my-3 form-control"
                    placeholder="Email"
                />

                <input
                    name="direccion"
                    onChange={handleInputChange} 
                    value={values.direccion}
                    type={'text'} 
                    className="my-3 form-control" 
                    placeholder="Direcci??n"
                />

                <button type="submit" className="btn btn-primary">Enviar</button>
            </form>
        </div>
    )
}