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
        <div className="container my-5">
            <h5>Contador Stock</h5>
            <hr/>
            
            <button onClick={handelRestar} className="btn btn-outline-danger ps-5 pe-5">-</button>
            <span className="mx-2"><strong>{ counter }</strong></span>
            <button onClick={handelSumar} className="btn btn-outline-success ps-5 pe-5">+</button>
        </div>
    )


}