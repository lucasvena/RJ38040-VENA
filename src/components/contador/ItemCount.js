import { Icon } from '@iconify/react';

export const Contador = ({max, counter, setCounter, handleAgregar}) => {

    // const [counter, setCounter] = useState(1)


    const handelRestar = () => {
        if (counter > 1){
            setCounter( counter - 1 )
        }
    }
    const handelSumar = () => {
        if (counter < max){
            setCounter( counter + 1 )
        }
    }

    return (
        <div className="my-1">
            <h6>Cantidad:</h6>
            
            <button onClick={handelRestar} className={`btn ps-3 pe-3 ${counter === 1 ? "btn-danger " : "btn-light"}`} disabled={counter === 1} >-</button>
            <span className="mx-2"><strong>{ counter }</strong></span>
            <button onClick={handelSumar} className={`btn ps-3 pe-3 ${counter === max ? "btn-secondary" : "btn-secondary"}`} disabled={counter === max}>+</button>

            <br/>

            <div className="buttons mt-2">
                <button onClick={handleAgregar}>
                    <strong><Icon icon="ant-design:shopping-cart-outlined" width="20" height="20"/>Agregar al carrito</strong>
                </button>
            </div>
        </div>
    )


}