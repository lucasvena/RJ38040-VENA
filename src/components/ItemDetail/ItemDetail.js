import './ItemDetail.css';
import { Icon } from '@iconify/react';
import { Contador } from '../contador/ItemCount';
import { useState } from 'react';
// import { Select } from '../Select/Select';


export const ItemDetail = ({item}) => {

    const [ cantidad, setCantidad ] = useState(1)
    // const [ talle, setTalle ] = useState(item.options[0].value)

    const handleAgregar = () => {
        const itemToCart = {
            id: item.id,
            precio: item.precio,
            nombre: item.nombre,
            // talle,
            cantidad
        }

        console.log(itemToCart)
        // console.log({
        //     ...item,
        //     cantidad
        // })
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


                        <Contador 
                            max={item.stock}
                            counter={cantidad}
                            setCounter={setCantidad}
                            handleAgregar={handleAgregar}
                        />

                    </div>
                </div>
            </div>
        </div>
            
    )

}