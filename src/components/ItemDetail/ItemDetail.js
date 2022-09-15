import './ItemDetail.css';
import { Icon } from '@iconify/react';
import { Contador } from '../contador/ItemCount';
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

// import { Select } from '../Select/Select';


export const ItemDetail = ({item}) => {

    const {cart, addToCart, isInCart} = useCartContext()
    console.log(cart)
    
    const [ cantidad, setCantidad ] = useState(1)
    // const [ talle, setTalle ] = useState(item.options[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            category: item.category,
            // talle,
            cantidad
        }
        console.log (isInCart(item.id))
        addToCart( itemToCart )
    }

    return (
        <div className='miContainer'>
            <div className="containerItemDetail">
                <div className="cardItemDetail">
                    <div className='images'>
                        {/* Futuro carousel de imagenes */}
                        <div className='carousel'>
                            <img src= {item.img} alt=""/> 
                        </div>
                    </div>
                    <div className='infos'>
                        <h1>{item.nombre}</h1>
                        
                        <div>
                            <Icon icon="bxs:star" color="gold" width="20" height="20" />
                            <Icon icon="bxs:star" color="gold" width="20" height="20" />
                            <Icon icon="bxs:star" color="gold" width="20" height="20" />
                            <Icon icon="bxs:star" color="gold" width="20" height="20" />
                            <Icon icon="bxs:star-half" color="gold" width="20" height="20" />
                        </div>

                        <div className="precio mt-3">
                            <h3> $ {item.precio}</h3>
                        </div>
                        <hr/>

                        <div> 
                            <h6>Descripción:</h6>
                            <p>{item.descripcion}</p>
                        </div>
                        {/* <hr/>
                        <Select options={item.options} onSelect={setTalle}/>
                        <hr/> */}

                        {
                            isInCart(item.id)
                            ?   <Link to="/cart" className='btn btn-success my-2'>Finalizar mi compra!</Link>
                            :   <Contador 
                                    max={item.stock}
                                    counter={cantidad}
                                    setCounter={setCantidad}
                                    handleAgregar={handleAgregar}
                                />
                        }
    
                    </div>
                </div>
            </div>
        </div>
            
    )

}