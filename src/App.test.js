import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";

test('renders home page', () => {
  const { getByText } = render(
      <React.StrictMode>
        <BrowserRouter>
          <Provider store={store}>
            <App/>
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

test('complete order', async () => {
    render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );

    const deliveryElement = screen.getByTestId('btnDelivery');
    expect(deliveryElement).toBeInTheDocument();
    fireEvent.click(deliveryElement);
    const deliveryMethodTextElement = await screen.findByText(/Delivery Method: delivery/);
    expect(deliveryMethodTextElement).toBeInTheDocument();
    const items = await screen.findAllByRole("select-pizza-link");
    expect(items).toHaveLength(5);
    const chonkyChickenButton = items[0];
    expect(chonkyChickenButton).toBeInTheDocument();
    fireEvent.click(chonkyChickenButton);

    const sizeSelect = await screen.findByTestId("size-select");
    expect(sizeSelect).toBeInTheDocument();

    const extraCheeseCheckbox = await screen.findByTestId("extra-cheese-checkbox");
    expect(extraCheeseCheckbox).toBeInTheDocument();

    const quantityTextField = await screen.findByTestId("quantity-textfield");
    expect(quantityTextField).toBeInTheDocument();

    const addToCartButton = await screen.findByTestId("add-to-cart-button");
    expect(addToCartButton).toBeInTheDocument();
    fireEvent.click(addToCartButton);

    const cartItems = await screen.findAllByRole("cart-table-tr");
    expect(cartItems).toHaveLength(1);

    const checkoutButton = await screen.findByTestId("checkout-button");
    expect(checkoutButton).toBeInTheDocument();
    fireEvent.click(checkoutButton);

    const totalPriceLabel = await screen.findByText(/Total Price/i);
    expect(totalPriceLabel).toBeInTheDocument();

    const priceValueLabels = await screen.findAllByText(/10\$/i);
    expect(priceValueLabels).toHaveLength(2);

    const confirmOrderButton = await screen.findByTestId("confirm-order-button");
    expect(confirmOrderButton).toBeInTheDocument();
    fireEvent.click(confirmOrderButton);

    const thankyouLabel = await screen.findByText(/Thank you for ordering Pizza!/i);
    expect(thankyouLabel).toBeInTheDocument();


});