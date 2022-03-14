import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Header from "./common/components/Header";
import Menu from "./pages/menu/Menu";
import Option from "./pages/menu/option/option";
import Checkout from "./pages/checkout/Checkout";
import NoMatch from "./pages/nomatch/NoMatch";

import { useSelector } from "react-redux";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  const cartStatus = useSelector((state) => state.cartReducer);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={cartStatus.deliveryType === "-" ? <Option/> : <Menu />} />
        <Route path="/checkout" element={cartStatus.cart.length === 0 ? 
                                                    <><br/><b>Empty Cart</b><br/>Back to <Link to="/">Order</Link> Page</> 
                                                    :
                                                    <Checkout />} />
        <Route path="*" element={<NoMatch />} />

      </Routes>
    </div>
  );
}

export default App;
