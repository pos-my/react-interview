import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createHashHistory } from 'history';

import HomeComponent from "../home/home";
import CheckoutComponent from "../checkout/checkout";

export default class RouteComponent extends React.Component {
  
  history=createHashHistory();
  render() {
    return (
      <Router history={this.history}>
        <Switch>
          <Route exact path="/" component={HomeComponent} />  
          <Route path="/checkout"  component={CheckoutComponent}/>      
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      </Router>
    );
  }
}
