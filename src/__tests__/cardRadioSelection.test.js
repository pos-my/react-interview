import React from 'react';
import { mount } from 'enzyme';
import RadioSelection from '../components/card/RadioSelection';

it('test prop\'s "onSelect" is called with proper value when "handleSelectOption" is called', ()=>{
  const props = {onSelect: jest.fn()};
  const wrapper = mount(
    <RadioSelection {...props} />
  );
  const instance = wrapper.instance();
  instance.handleSelectOption("testValue");
  expect(props.onSelect).toHaveBeenCalledWith("testValue");
})
