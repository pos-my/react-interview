import React from 'react';
import ReactDOM from 'react-dom';
import { screen } from '@testing-library/dom'
import { fireEvent, render } from '@testing-library/react'
import Main from '../screens/order/Main';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Main />, div);
});

describe('test clicking delivery type button', ()=>{
  it('click "Pick Up" button', ()=>{
    const props = { history: { push: jest.fn() } };
    const wrapper = render(
      <Main {...props} />
    );

    fireEvent.click(screen.getByText('PICK UP'))
    expect(props.history.push).toHaveBeenCalledWith('selection', {deliveryType: 'Pick Up'});
  })

  it('click "Delivery" button', ()=>{
    const props = { history: { push: jest.fn() } };
    const wrapper = render(
      <Main {...props} />
    );

    fireEvent.click(screen.getByText('DELIVERY'))
    expect(props.history.push).toHaveBeenCalledWith('selection', {deliveryType: 'Delivery'});
  })
})
