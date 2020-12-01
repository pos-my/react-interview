import React from 'react';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import SelectionSummaryRow from '../components/module/SelectionSummaryRow';

it('test render of component', ()=>{
  const div = document.createElement('div');
  ReactDOM.render(<SelectionSummaryRow />, div);
})

it('test "removeItem" is called on "Remove" clicked with correct value', ()=>{
  const props = {index: 0, removeItem: jest.fn()};
  const wrapper = render(
    <SelectionSummaryRow {...props} />
  );
  fireEvent.click(screen.getByText("Remove"));
  expect(props.removeItem).toHaveBeenCalledWith(props.index);
})
