import React from 'react';
import { mount } from 'enzyme';
import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import Checkout from '../screens/order/Checkout';

describe('test showing and hiding popup', ()=>{
  const props = {history: {push: jest.fn()}, location: {state: {deliveryType: 'testType', pizzaList: [
    {name: "test name", pizzaSize: "small", extraCheese: "yes", quantity: 1, price: 10},
    {name: "test name", pizzaSize: "small", extraCheese: "yes", quantity: 2, price: 10}
  ]}}};
  const wrapper = mount(
    <Checkout {...props} />
  );
  const instance = wrapper.instance();

  it('test showing the popup', ()=>{
    instance.handleConfirm();
    expect(wrapper.state('showPopup')).toBe(true);
  })

  it('test hiding the popup', ()=>{
    instance.handleClosePopup();
    expect(wrapper.state('showPopup')).toBe(false);
  })
})
