import { Navbar } from './components/navbar/Navbar.js';
import { ItemListContainer } from './components/contenedor/ItemListContainer.js';
import { CardsContainer } from './components/card/CardsContainer';
import { Contador } from './components/contador/ItemCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <Navbar/>

      {/* aca pasamos las propiedades del objeto y repetimos los contenedores las veces que queremos*/}
      <ItemListContainer usuario="Mr. X" mensaje="Mirá los productos que tenemos para vos!"/>

      <Contador max={10}/>

      <CardsContainer/>
      
    </div>
  );
}

export default App;
