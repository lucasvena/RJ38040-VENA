import { useCartContext } from "../../context/CartContext"
import { Icon } from '@iconify/react'

export const Cart = () => {

    const { cart, cartTotal, emptyCart, removeItem } = useCartContext()

    return (
        <div>
            <h2>Tu Carrito</h2>
            <hr/>


            { cart.map((item) => (
                // <CartItem key={} item={item}/> tratar de optimizar
                <div key={item.id}>
                    <h3>{item.nombre}</h3>
                    <p>Precio: {item.precio}</p>
                    <p>Cantidad: {item.cantidad}</p>
                    <small>Category: {item.category}</small>
                    <button onClick={() => removeItem(item.id)} className="btn btn-danger mx-2"><Icon icon="dashicons:trash" width="25" height="25"/></button>
                    <hr/>

                </div>

            ))}

            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger"> Vaciar carrito</button>
        </div>
    )

}