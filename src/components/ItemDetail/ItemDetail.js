// import { Card } from "react-bootstrap"
import './ItemDetail.css';
import { Icon } from '@iconify/react';
import { Contador } from '../contador/ItemCount';


export const ItemDetail = ({item}) => {

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

                        <Contador max={10}/>

                        <div className="buttons mt-2">
                            <button>
                                <Icon icon="ant-design:shopping-cart-outlined" width="20" height="20"/>
                                <strong>AGREGAR AL CARRITO</strong>
                            </button>
                            <button>
                                <strong>COMPRAR!</strong>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
    )

}