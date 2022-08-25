
const ItemListContainer = (props) => {

    
    const {usuario, mensaje} = props

    // Aca armamos las cards, muestran lo que les pasamos por propiedades
    // Agregar las card por libreria dentro del return :)
    return (
        <div>
            <h2> Bienvenido {usuario}</h2>
            <hr/>
            <p> {mensaje} </p>
        </div>
    )
}

export default ItemListContainer