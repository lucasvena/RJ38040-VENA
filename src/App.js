import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext.js';
import { LoginProvider } from './context/LogingContext.js';
import AppRouter from './router/AppRouter.js';

const App = () => {

  return (
    <LoginProvider>
      <CartProvider>        
          <AppRouter />
      </CartProvider>
    </LoginProvider>
  );
}

export default App;


