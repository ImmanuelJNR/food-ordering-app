import { FC, useEffect } from 'react';
import Menu from './component/Menu';
import Cart from "./component/cart"
import Summary from "./component/summary";
import {SuccessModal} from './component/Modal'
import {MenuProvider} from "./Context/MenuContext"
import { CartProvider } from "./Context/CartContext";

const App: FC = () => {
  useEffect(() => {
    const tg = window.Telegram?.WebApp;
    if (tg) {
      tg.ready();
      tg.expand();
    }
  }, []);

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
