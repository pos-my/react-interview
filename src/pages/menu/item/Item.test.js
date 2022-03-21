import { mount } from "enzyme";
import { Provider } from "react-redux";
import { findTestAtrr, checkProps, testStore } from "../../../utilTest";

import Item from "./Item";

const setUp = (props={}) => {
  const store = testStore();
  const component = mount( <Provider store={store}> <Item {...props}/> </Provider> );
  return component;
}

describe("Item Component", () => {
  let expectedProbs = {};

  beforeEach(() => {
    expectedProbs = {
      item: {
        id: 1,
        name: "item 1",
        price: 11,
        imgurl: "corndog.jpg",
        import: "/test/",
      },
    };
  });

  it("Should render form without crash", () => {
    const wrapper = setUp(expectedProbs);
    
    const menuIdForm = findTestAtrr(wrapper, 'menu-id-form');
    const sizeForm = findTestAtrr(wrapper, 'size-form');
    const extraCheeseForm = findTestAtrr(wrapper, 'extra-cheese-form');
    const quantityForm = findTestAtrr(wrapper, 'quantity-form');
    const submitForm = findTestAtrr(wrapper, 'submit-form');
    

    expect(menuIdForm).toHaveLength(1);
    expect(sizeForm).toHaveLength(1);
    expect(extraCheeseForm).toHaveLength(1);
    expect(quantityForm).toHaveLength(1);
    expect(submitForm).toHaveLength(1);
  });

  it("Should validate Proptypes", () => {
    const probsErr = checkProps(Item, expectedProbs);
    expect(probsErr).toBeUndefined();
  });
});
