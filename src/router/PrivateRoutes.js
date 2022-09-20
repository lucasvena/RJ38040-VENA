import { Navbar } from '../components/navbar/Navbar.js';
import { ItemListContainer } from '../components/contenedor/ItemListContainer.js';
import { ItemDetailContainer } from '../components/ItemDetailContainer/ItemDetailContainer.js';
import { Cart } from '../components/Cart/Cart.js';
import { Routes, Route, Navigate } from 'react-router-dom';


const PrivateRoutes = () => {

    return (
        <>
            <Navbar/>
            <Routes>

                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
                <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
                <Route path='/cart' element={<Cart/>}/>
                {/* <Route path='/nosotros' element={ <Nosotros/> }/> */}
                {/* <Route path='/contacto' element={ <Contacto/> }/> */}
                {/* <Route path='*' element={ <Error404/>}/> */}
                <Route path='*' element={ <Navigate to="/"/>}/>

            </Routes>

        </>
    )

}

export default PrivateRoutes