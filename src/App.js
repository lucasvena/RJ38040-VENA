import { Navbar } from './components/navbar/Navbar.js';
import { ItemListContainer } from './components/contenedor/ItemListContainer.js';
import { Contador } from './components/contador/ItemCount.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  return (
    <div>
      <Navbar/>

      {/* aca pasamos las propiedades del objeto y repetimos los contenedores las veces que queremos*/}
      <ItemListContainer/>

      <Contador max={10}/>

      
    </div>
  );
}

export default App;
