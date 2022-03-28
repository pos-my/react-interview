import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';

describe('tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  test('Home page', () => {
    expect(wrapper.text()).toContain("Delivery Type");
  });
  
});

