import { useState } from "react"


export const Contador = ({max}) => {

    const [counter, setCounter] = useState(0)


    const handelSumar = () => {
        if (counter < max){
            setCounter( counter + 1 )
        }
    }

    const handelRestar = () => {
        if (counter > 0){
            setCounter( counter - 1 )
        }
    }

    return (
        <div className="my-1">
            <h6>Cantidad:</h6>
            
            <button onClick={handelRestar} className="btn btn-light ps-3 pe-3">-</button>
            <span className="mx-2"><strong>{ counter }</strong></span>
            <button onClick={handelSumar} className="btn btn-light ps-3 pe-3">+</button>
        </div>
    )


}