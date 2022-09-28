import { createContext, useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2'


export const CartContext = createContext()

const init = JSON.parse(localStorage.getItem('carrito')) || []


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState(init)

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id) )
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const cartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const cartTotal = () => {
        return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0)
    }

    const emptyCart = () => {
        Swal.fire({
            title: 'Estas seguro?',
            text: "Si vacias el carrito no podrás volver atrás!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, vaciar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                setCart([])
            }
          })
    }

    const terminarCompra = (id) => {
        Swal.fire({
            title: 'Tu compra se registró con éxito!',
            text: `Tu número de orden es: ${id}`,
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Aceptar',
        })
        setCart([])
    }

    useEffect (() => {
        localStorage.setItem('carrito', JSON.stringify(cart))
    })

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem,
            terminarCompra
          }}>
            {children}

        </CartContext.Provider>


    )
}

export const useCartContext = () => {
    return useContext(CartContext)
}