import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './assets/css/main.css';
import './assets/css/popupjs.css';

import OrderMain from './screens/order/Main';
import OrderPizzaSelect from './screens/order/PizzaSelect';
import OrderCheckout from './screens/order/Checkout';
import RedirectUnfound from './screens/redirect/Unfound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={"/"} component={OrderMain} />
        <Route exact path={"/selection"} component={OrderPizzaSelect} />
        <Route exact path={"/checkout"} component={OrderCheckout} />

        <Route exact path={"/unfound"} component={RedirectUnfound} />
        <Redirect to={"/unfound"} />
      </Switch>
    </Router>
  );
}

export default App;
