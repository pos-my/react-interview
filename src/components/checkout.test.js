import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "../store";
import Checkout from "./checkout";

test('renders home page', () => {
  render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <Checkout/>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
  );
    const errorElement = screen.getByTestId('no-orders-alert');
    expect(errorElement).toBeInTheDocument();
});