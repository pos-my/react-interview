import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import DeliveryMethod from './DeliveryMethod';
import NotFound from './NotFound';

  const Router = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={DeliveryMethod} />
        <Route path="/store/:storeId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  
export default Router;
