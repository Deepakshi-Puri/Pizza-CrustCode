import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { CartContext } from "./CartContext";
import { useEffect, useState } from 'react';

const App = () => {

  const [cart, setCart] = useState({});

  useEffect(() => {
    const cart = window.localStorage.getItem('cart');
    console.log(JSON.parse(cart));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart));
  },[cart]);

  return (
    <>
      <Router>
        <CartContext.Provider value={{cart, setCart}}>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/:_id">
            <SingleProduct />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
        </CartContext.Provider>
      </Router>
    </>
  )
}

export default App;