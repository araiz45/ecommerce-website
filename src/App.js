import React, {
  useEffect,
  useState
} from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import Home from './scenes/home/Home';
import ItemDetail from './scenes/ItemDetails/ItemDetail';
import Checkout from './scenes/checkout/Checkout';
import Confirmation from './scenes/checkout/Confirmation';
import Navbar from './scenes/global/Navbar';
import CartMenu from './scenes/global/CartMenu';

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:itemId' element={<ItemDetail />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='checkout/success' element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
