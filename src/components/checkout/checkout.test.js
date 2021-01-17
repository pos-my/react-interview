import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect"; // You can use any testing library
import { Provider } from "react-redux";
import { CheckOut } from "./checkout";
import {
  render,
  cleanup,
  within,
  queryAllByAttribute,
} from "@testing-library/react";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<checkout /> unit test", () => {

    afterEach(cleanup);

  it("should display the item to checkout if the items not null in the memory", () => {
    const items = [
      {
        Id: "39cb4ee2-c5f8-4961-b730-fb9e02ccbab8",
        pizza: "Vegan Villa Vista 8$",
        extraCheese: "Yes",
        size: "large",
        qty: "7",
        price: 56,
      },
      {
        Id: "39cb4ee2-c5f8-4961-0000-fb9e02ccbab8",
        pizza: "Vegan Villa Vista 3$",
        extraCheese: "No",
        size: "small",
        qty: "2",
        price: 6,
      },
    ];

    const deliveryMethodMock = "delivery";
    const storeMock = mockStore({
      info: { CartInfo: items, IsEmpty: false },
      deliveryMethod: { DeliveryMethod: deliveryMethodMock },
    });

    const { container, getByRole, getByTestId } = render(
      <Provider store={storeMock}>
        <CheckOut />
      </Provider>
    );

    // check delivery method
    const deliveryMethod = within(getByTestId("delivery-method"));
    expect(
      deliveryMethod.getByText("Delivery Method : " + deliveryMethodMock)
    ).toBeInTheDocument();

    // check table
    expect(getByRole("table", { id: "items" })).toBeTruthy();

    const getById = queryAllByAttribute.bind(null, "id");
    const table = getById(container, "row-content");

    expect(table.length).toBe(2);

    // check price
    const totalPrice = items
      .map((x) => x.price)
      .reduce((prev, next) => prev + next);
    const price = within(getByTestId("price"));
    expect(price.getByText("Total Price : " + totalPrice)).toBeInTheDocument();
  });

  it("shoud display 'nothing to checkout' if the cart is empty in the memort", () => {
    const items = [];

    const storeMock = mockStore({
      info: { CartInfo: items, IsEmpty: false },
      deliveryMethod: { DeliveryMethod: "delivery" },
    });

    const {getByTestId } = render(
      <Provider store={storeMock}>
        <CheckOut />
      </Provider>
    );

    const text = within(getByTestId("empty-cart"));
    expect(text.getByText("your have nothing to checkout .... :(")).toBeInTheDocument();

  });
});
