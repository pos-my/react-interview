import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme';
import CheckoutItem from '../components/card/CheckoutItem';

it('test render of CheckoutItem', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<CheckoutItem />, div);
})

describe('test the props values received properly', ()=>{
  let wrapper
  const data = {name: "test name", pizzaSize: "small", extraCheese: "yes", quantity: 2, price: 10};
  beforeEach(()=>{
    wrapper = mount(<CheckoutItem data={data} />)
  })

  it('test rendered value for name', ()=>{
    expect(wrapper.find('div').childAt(0).text()).toMatch("Name: " + data.name);
  })
  it('test rendered value for pizza size', ()=>{
    expect(wrapper.find('div').childAt(1).text()).toMatch("Size: " + data.pizzaSize);
  })
  it('test rendered value for extra cheese', ()=>{
    expect(wrapper.find('div').childAt(2).text()).toMatch("Extra Cheese: " + data.extraCheese);
  })
  it('test rendered value for quantity', ()=>{
    expect(wrapper.find('div').childAt(3).text()).toMatch("Quantity: " + data.quantity);
  })
  it('test rendered value for price', ()=>{
    expect(wrapper.find('div').childAt(4).text()).toMatch("Total: " + (data.price * data.quantity));
  })
})

describe('test CSS class is selected properly by index value', ()=>{
  it('test if index is 0', ()=>{
    const data = {index: 0};
    const wrapper = mount(<CheckoutItem data={data} />);
    expect(wrapper.find('div').hasClass("checkoutItemBg"));
  })

  it('test if index is 1', ()=>{
    const data = {index: 1};
    const wrapper = mount(<CheckoutItem data={data} />);
    expect(wrapper.find('div').hasClass("checkoutItem"));
  })
})
