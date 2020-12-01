import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import PizzaSelect from '../screens/order/PizzaSelect';

it('test render of PizzaSelect', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<PizzaSelect />, div);
})

describe('test open checkout', () => {
  it('open checkout page on click "Checkout" button', () => {
    const mProps = { history: { push: jest.fn() } };
    const params = {deliveryType: '', pizzaList: []};
    const wrapper = mount(
      <PizzaSelect
        {...mProps}
        location={{state: params}} />
    );
    const instance = wrapper.instance();
    instance.handleCheckout();
    expect(mProps.history.push).toHaveBeenCalledWith('checkout', params);
  });
});

describe('test adding and removing pizza item', () => {
  const pizzaData = {pizzaType: "chonkyChicken", pizzaSize: "small", extraCheese: "yes", quantity: 1};
  it('add item to the pizza list by clicking button', () => {
    const wrapper = mount(
      <PizzaSelect />
    );
    const instance = wrapper.instance();
    instance.addPizzaToList(pizzaData);
    expect(wrapper.state('pizzaList').length).toBe(1);
  });

  it('remove item from pizza list by clicking button', () => {
    const wrapper = mount(
      <PizzaSelect />
    );
    const instance = wrapper.instance();
    instance.addPizzaToList(pizzaData);
    instance.removePizza(0);
    expect(wrapper.state('pizzaList').length).toBe(0);
  });
});
