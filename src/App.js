import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';

function App() {
  const [isCartShown, setIsCartShown] = useState(false);

  const showCartHandler = () => {
    setIsCartShown(true);
  }

  const hideCartHandler = () => {
    setIsCartShown(false);
  }

  return (
    <CartProvider>
      {isCartShown && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
