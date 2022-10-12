import { Item } from '../Item/Item';
import './ItemList.css';

export const ItemList = ( {productos = []} ) => {

    return (
        <div className="row m-5">
            <h2> PRODUCTOS </h2>
            <hr/>
            
            { productos.map((prod) => (
                <div className="col-4 p-4" key={prod.id}>
                    <Item producto={prod} key={prod.id}/> 
                </div>
            )) 
            }
        </div>
    )
}