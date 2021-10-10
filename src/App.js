import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { Home, Checkout, NotFound } from "./screens";
import { Container } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./reducers";

function App() {
  return (
    <Provider store={store}>
      <Container fixed>
        <Switch>
          <Route path="/" exact={true} key="home" component={Home} />
          <Route
            path="/checkout"
            exact={true}
            key="checkout"
            component={Checkout}
          />
          <Route path="/not-found" key="not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </Container>
    </Provider>
  );
}

export default App;
