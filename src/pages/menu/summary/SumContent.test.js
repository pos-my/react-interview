import { mount } from "enzyme";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import { findTestAtrr, testStore } from "../../../utilTest";

import SumContent from "./SumContent";

const setUp = (props={}) => {
    const defaultState = {
        cartReducer: {
          deliveryType: 'delivery',
          total: 22,
          cart: [
            {
              itemId: 3,
              size: 'small',
              extraCheese: false,
              quantity: 1,
              id: 0
            },
            {
              itemId: 2,
              size: 'small',
              extraCheese: false,
              quantity: 1,
              id: 1
            }
          ]
        }
      }
    const store = testStore(defaultState);
    const component = mount( <Provider store={store}> <MemoryRouter> <SumContent/> </MemoryRouter> </Provider> );
    return component;
}

describe('SumContent Component', ()=> {
    it('Should render without crashing', ()=> {
        const wrapper = setUp();
        const summaryList = findTestAtrr(wrapper, "summary-list");

        expect(summaryList).toHaveLength(1);
    });
});