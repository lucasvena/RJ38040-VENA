import {CardItem} from './Card'
// se encargan de administrar la logica para renderizar o para enviar a los componentes de presentacion 
export const CardsContainer = () => {
    // trabaja la lógica primero
    const prod = [
        {
            nombre: 'ANILLO CON CUARZO',
            descripcion: 'Anillo con piedra natural , bañado en plata 925',
            medida: 18 + 'mm'
        }
    ]
    // renderiza 
    return (
        <div>
            <CardItem anillos={ prod[0] }/>
        </div>
    )
}

// export default CardsContainer
