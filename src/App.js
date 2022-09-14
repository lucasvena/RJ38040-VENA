import { Navbar } from './components/navbar/Navbar.js';
import { ItemListContainer } from './components/contenedor/ItemListContainer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer.js';
// import { Nosotros } from './components/Nosotros/Nosotros.js';
// import { Contacto } from './components/Contacto/Contacto.js';

const App = () => {

  return (

    <BrowserRouter>

        <Navbar/>
        <Routes>

          <Route path='/' element={ <ItemListContainer/> }/>
          <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>

          {/* <Route path='/nosotros' element={ <Nosotros/> }/> */}
          {/* <Route path='/contacto' element={ <Contacto/> }/> */}
          {/* <Route path='*' element={ <Error404/>}/> */}
          <Route path='*' element={ <Navigate to="/"/>}/>

        </Routes>

    </BrowserRouter>
  );
}

export default App;
