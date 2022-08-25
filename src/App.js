import { Navbar } from './components/navbar/Navbar.js';
import ItemListContainer from './components/contenedor/ItemListContainer.js';
import CardsContainer from './components/card/CardsContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <Navbar/>
      {/* aca pasamos las propiedades del objeto y repetimos los contenedores las veces que queremos*/}
      
      <ItemListContainer usuario="Mr. X" mensaje="Mirá los productos que tenemos para vos!"/>

      <CardsContainer/>
      
    </div>
  );
}

export default App;
