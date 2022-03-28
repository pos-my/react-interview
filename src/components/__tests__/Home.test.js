import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Home from '../Home';
import App from '../../App';

describe('tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App><Home /></App>);
  });

  test('Home page', () => {
    expect(wrapper.text()).toContain("Delivery Type");
  });
  
});

describe('test click', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App><Home /></App>);
  });

  test('test click delivery', () => {
    wrapper.find('button.delivery_btn').simulate('click');
    expect(wrapper.find('Home').props().cart[0]).toEqual(0);
  });
  test('test click pickup', () => {
    wrapper.find('button.pickup_btn').simulate('click');
    expect(wrapper.find('Home').props().cart[0]).toEqual(1);
  });
  
});