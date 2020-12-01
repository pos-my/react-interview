import React from 'react';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import RadioButton from '../components/button/RadioButton';

it('test "onSelect" function being call on clicked', ()=>{
  const props = { id: 'testId', title: 'Test Button', value: 'testValue', onSelect: jest.fn() };
  const wrapper = render(
    <RadioButton {...props} />
  );
  fireEvent.click(screen.getByLabelText(props.title))
  expect(props.onSelect).toHaveBeenCalledWith(props.value);
})
