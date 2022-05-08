import React from 'react';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import Home from "./home";
import store from "../store";

test('renders home page', () => {
    const { getByText } = render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <Home/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
    const headerElement = getByText(/Pizza/i);
    expect(headerElement).toBeInTheDocument();

    const pickupButtonElement = getByText(/Pick Up/i);
    expect(pickupButtonElement).toBeInTheDocument();

    const deliveryElement = screen.getByTestId('btnDelivery');
    expect(deliveryElement).toBeInTheDocument();
});