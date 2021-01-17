import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect"; // You can use any testing library
import { Provider } from "react-redux";
import { Cart } from "./cart";
import { render, fireEvent, cleanup, within , queryAllByAttribute , queryByAttribute} from "@testing-library/react";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<cart /> unit test", () => {

  
  afterEach(cleanup);


  it("should display empty cart if cartInfo is empty in the memory", () => {
    const storeMock = mockStore({
      info: { CartInfo: [], IsEmpty: true },
      deliveryMethod: {DeliveryMethod : undefined},
    });

    const { getByTestId } = render(
      <Provider store={storeMock}>
        <Cart />
      </Provider>
    );

    const { getByText } = within(getByTestId("empty-type"));

    expect(getByText("your cart is empty .... :(")).toBeInTheDocument();
  });

  it("should display cart items if cartInfo is not empty in the memory", () => {
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

    const storeMock = mockStore({
      info: { CartInfo: items, IsEmpty: false },
      deliveryMethod: "delivery",
    });

    const { container , getByRole} = render(
      <Provider store={storeMock}>
        <Cart />
      </Provider>
    );

    expect(getByRole('table', { id: "items" })).toBeTruthy();

    const getById = queryAllByAttribute.bind(null, 'id'); 
    const table = getById(container, 'row-content');

    expect(table.length).toBe(2);

  });

  it("should remove one item from the cart after clicking remove button" , () => {
    
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

    const storeMock = mockStore({
      info: { CartInfo: items, IsEmpty: false },
      deliveryMethod: {DeliveryMethod : "delivery"},
    });

    
    const { container } = render(
      <Provider store={storeMock}>
        <Cart />
      </Provider>
    );

    const getById = queryByAttribute.bind(null, 'id'); 

    fireEvent(
      getById(container, '39cb4ee2-c5f8-4961-0000-fb9e02ccbab8'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    );
    
    const method = storeMock.getActions();
  
    expect(method.length).toEqual(1);
    expect(method[0].type).toEqual("DeleteFromCart");
  
  });
});
