import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Home } from "./components/home/Home";
import "./App.css";
import { Pizza } from "./components/pizza_types/Pizza";
import { Cart } from "./components/cart/cart";
import { CheckOut } from "./components/checkout/checkout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import {NotFound} from './components/notFound/NotFound';
import { Header } from "./components/header/header";

function App() {
  return (
    <Provider store={store}>
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/types" component={Pizza} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={CheckOut} />
        <Route exact path="/" component={Home} />
        <Route path="/" component={NotFound} />
      </Switch>
    </BrowserRouter>
  </Provider>
  );
}

export default App;
