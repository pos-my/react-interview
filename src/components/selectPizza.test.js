import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import SelectPizza from "./selectPizza";
import store from "../store";

test('renders select pizza error page', () => {
  render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <SelectPizza/>
          </Provider>
        </BrowserRouter>
      </React.StrictMode>
  );
  const errorElement = screen.getByTestId('no-delivery-method-alert');
  expect(errorElement).toBeInTheDocument();

});