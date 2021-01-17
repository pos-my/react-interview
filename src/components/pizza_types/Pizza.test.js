import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import expect from "expect"; // You can use any testing library
import { Provider } from "react-redux";
import { Pizza } from "./Pizza";
import { render, fireEvent, cleanup} from "@testing-library/react";


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe("<pizza /> unit test" , () => {

  afterEach(cleanup);

  it("should pass the validation" , () => {
    window.alert = jest.fn();
    
    const items = [];

    const deliveryMethodMock = "delivery";
    const storeMock = mockStore({
      info: { CartInfo: items, IsEmpty: false },
      deliveryMethod: { DeliveryMethod: deliveryMethodMock },
    });
    
    const {getByText , getByLabelText , getByRole , getByTestId} = render(
      
      <Provider store={storeMock}>
        <Pizza />
      </Provider>
    );
    const contentInput = getByTestId("type-1-input");

    fireEvent.click(contentInput, {
      target: { value: "Vegan Villa Vista 8$" }
    });

    fireEvent.click(getByRole('radio', {name: /Yes/}) , { target: { value: "Yes" }});
    fireEvent.click(getByRole('radio', {name: /Small/}) , { target: { value: "Small" }});
    fireEvent.change(getByLabelText("quantity-input"), { target: { value: 7 } })

    
    fireEvent(
      getByText("Add To Cart", 'Submit'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    const method = storeMock.getActions();
  
    expect(method.length).toEqual(1);
    expect(method[0].type).toEqual("AddToCart");
   
  });

  it("should not pass the validation , missing size" , () => {
    window.alert = jest.fn();
  
    const storeMock = mockStore({
      info: { CartInfo: [], IsEmpty: true },
      deliveryMethod: {DeliveryMethod : undefined},
    });

    const {getByText , getByLabelText , getByRole , getByTestId} = render(
      
      <Provider store={storeMock}>
        <Pizza />
      </Provider>
    );
    const contentInput = getByTestId("type-1-input");

    // assert
    fireEvent.click(contentInput, {
      target: { value: "Vegan Villa Vista 8$" }
    });

    fireEvent.click(getByRole('radio', {name: /Yes/}) , { target: { value: "Yes" }});
    fireEvent.change(getByLabelText("quantity-input"), { target: { value: 7 } })


    fireEvent(
      getByText("Add To Cart", 'Submit'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    
    expect(window.alert.mock.calls[0][0]).toEqual("Please complete your order by completing the mandatory fields..!!");
  });

  it("should not pass the validation , missing Qty" , () => {
    window.alert = jest.fn();
  
    const storeMock = mockStore({
      info: { CartInfo: [], IsEmpty: true },
      deliveryMethod: {DeliveryMethod : undefined},
    });

    const {getByText , getByRole , getByTestId} = render(
      
      <Provider store={storeMock}>
        <Pizza />
      </Provider>
    );
    const contentInput = getByTestId("type-1-input");

    // assert
    fireEvent.click(contentInput, {
      target: { value: "Vegan Villa Vista 8$" }
    });

    fireEvent.click(getByRole('radio', {name: /Yes/}) , { target: { value: "Yes" }});
    fireEvent.click(getByRole('radio', {name: /Small/}) , { target: { value: "Small" }});


    fireEvent(
      getByText("Add To Cart", 'Submit'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    
    expect(window.alert.mock.calls[0][0]).toEqual("Please complete your order by completing the mandatory fields..!!");
  });

  it("should not pass the validation , missing extra cheese" , () => {
    window.alert = jest.fn();
  
    const storeMock = mockStore({
      info: { CartInfo: [], IsEmpty: true },
      deliveryMethod: {DeliveryMethod : undefined},
    });

    const {getByText , getByLabelText , getByRole , getByTestId} = render(
      
      <Provider store={storeMock}>
        <Pizza />
      </Provider>
    );
    const contentInput = getByTestId("type-1-input");

    // assert
    fireEvent.click(contentInput, {
      target: { value: "Vegan Villa Vista 8$" }
    });

    fireEvent.click(getByRole('radio', {name: /Small/}) , { target: { value: "Small" }});
    fireEvent.change(getByLabelText("quantity-input"), { target: { value: 7 } })

    fireEvent(
      getByText("Add To Cart", 'Submit'),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    
    expect(window.alert.mock.calls[0][0]).toEqual("Please complete your order by completing the mandatory fields..!!");
  });
});