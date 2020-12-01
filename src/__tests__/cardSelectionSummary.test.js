import React from 'react';
import { mount } from 'enzyme';
import SelectionSummary from '../components/card/SelectionSummary';

it('test prop\'s "handleRemove" is called with proper value when "removeItem" is called', ()=>{
  const props = {handleRemove: jest.fn()};
  const wrapper = mount(
    <SelectionSummary {...props} />
  );
  const instance = wrapper.instance();
  instance.removeItem(0);
  expect(props.handleRemove).toHaveBeenCalledWith(0);
})
