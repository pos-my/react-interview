import React, {useState} from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextNumberInput from '../components/input/TextNumberInput';

it('test prop\'s "onChange" is called with correct value when input is edited', ()=>{
  const props = {onChange: jest.fn()};
  const wrapper = render(
    <TextNumberInput {...props} />
  );

  fireEvent.change(wrapper.getByLabelText("quantityInput"), { target: { value: '10' } })
  expect(props.onChange).toHaveBeenCalledWith('10');
})
