import { FC } from 'react';
import Menu from './component/Menu';
import Cart from "./component/cart"
import Summary from "./component/summary";
import {SuccessModal} from './component/Modal'
import {MenuProvider} from "./Context/MenuContext"
import { CartProvider } from "./Context/CartContext";

const App: FC = () => {
  return (
      <div className='app'>
        <MenuProvider>
          <CartProvider>
            <Menu/>
            <Cart/>
            <Summary />
            <SuccessModal />
          </CartProvider>
        </MenuProvider>
      </div>
  );
}

export default App;
