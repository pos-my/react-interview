import App from "./App"
import { Provider } from "react-redux";
import { mount } from 'enzyme';
import { MemoryRouter } from "react-router-dom";
import { testStore } from "./utilTest";

import Menu from "./pages/menu/Menu";
import Option from "./pages/menu/option/Option";

const setUp = (defaultState, props={}) => {
  const store = testStore(defaultState);
  const component = mount( <Provider store={store}> <MemoryRouter> <App/> </MemoryRouter> </Provider> );
  return component;
}

describe("Rendering Components", () => {

  it("Renders <App/> Without Crashing", () => {
    const defaultState = {
      cartReducer: {
        deliveryType: '-',
        total: 22,
        cart: []
      }
    }
    const deliveryState = {
      cartReducer: {
        deliveryType: 'pickup',
        total: 22,
        cart: []
      }
    }
    const noMenuRender = setUp(defaultState);
    const menuRender = setUp(deliveryState);

    const checkOption1 = noMenuRender.find(Option);
    const checkMenuList1 = noMenuRender.find(Menu);

    const checkOption2 = menuRender.find(Option);
    const checkMenuList2 = menuRender.find(Menu);

    expect(checkOption1).toHaveLength(1);
    expect(checkMenuList1).toHaveLength(0);

    expect(checkOption2).toHaveLength(0);
    expect(checkMenuList2).toHaveLength(1);    
  });

});