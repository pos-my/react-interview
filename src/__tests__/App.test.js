import React from 'react';
import { render } from '@testing-library/react'
import { createMemoryHistory } from "history";
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import { Router, Redirect } from 'react-router-dom';
import App from '../App';
import OrderMain from '../screens/order/Main';
import OrderPizzaSelect from '../screens/order/PizzaSelect';
import OrderCheckout from '../screens/order/Checkout';
import RedirectUnfound from '../screens/redirect/Unfound';

describe('Test if path renders the proper page', ()=>{
  it('should show Main component for "/" (Landing page)', () => {
    const history = createMemoryHistory()
    const component = mount(
      <Router history={history}>
        <OrderMain path="/" />
      </Router>
    );
    expect(history.location.pathname).toBe("/");
  });

  it('should show Selection component for "/selection"', () => {
    const history = createMemoryHistory()
    const component = mount(
      <Router history={history}>
        <OrderPizzaSelect path="/selection" />
        <Redirect to={"/unfound"} />
      </Router>
    );
    history.push('/selection')
    expect(history.location.pathname).toBe("/selection");
  });

  it('should show Checkout component for "/checkout"', () => {
    const history = createMemoryHistory()
    const component = mount(
      <Router history={history}>
        <OrderCheckout
          path="/checkout"
          location={{state: {deliveryType: '', pizzaList: []}}} />
        <Redirect to={"/unfound"} />
      </Router>
    );
    history.push('checkout')
    expect(history.location.pathname).toBe("/checkout");
  });

  it('should show Unfound component for "/unfound"', () => {
    const history = createMemoryHistory()
    history.push('/unfound')
    render(
      <Router history={history}>
        <RedirectUnfound path="/unfound" />
        <Redirect to={"/unfound"} />
      </Router>
    );
    expect(history.location.pathname).toBe("/unfound");
  });

  test('landing on a non-existing page', () => {
    const history = createMemoryHistory()
    history.push('/nonexist')
    render(
      <Router history={history}>
        <App />
        <Redirect to={"/unfound"} />
      </Router>
    );
    expect(history.location.pathname).toBe("/unfound");
  });
});
