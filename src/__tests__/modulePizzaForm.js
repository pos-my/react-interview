import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { screen } from '@testing-library/dom';
import { fireEvent, render } from '@testing-library/react';
import PizzaForm from '../components/module/PizzaForm';

describe('test change state\'s values when functions are called', ()=>{
  const props = {
    typeOption: [{id: "chonkyChicken", name: "Chonky Chicken", price: 10}, {id: "beefBBQ", name: "Beef Barbeque", price: 12}],
    sizeOption: [{id: "small", name: "Small"}, {id: "medium", name: "Medium"}],
    cheeseOption: [{id: "yes", name: "Yes"}, {id: "no", name: "No"}],
    addPizzaToList: jest.fn()
  };

  let wrapper;
  let instance;
  beforeEach(()=>{
    wrapper = mount(
      <PizzaForm {...props} />
    );
    instance = wrapper.instance();
  });

  it('call "onSelectType" function', ()=>{
    expect(wrapper.state().pizzaType).toEqual(props.typeOption[0].id);
    instance.onSelectType(props.typeOption[1].id);
    expect(wrapper.state().pizzaType).toEqual(props.typeOption[1].id);
  });

  it('call "onSelectSize" function', ()=>{
    expect(wrapper.state().pizzaSize).toEqual(props.sizeOption[0].id);
    instance.onSelectSize(props.sizeOption[1].id);
    expect(wrapper.state().pizzaSize).toEqual(props.sizeOption[1].id);
  });

  it('call "onSelectExtraCheese" function', ()=>{
    expect(wrapper.state().extraCheese).toEqual(props.cheeseOption[0].id);
    instance.onSelectExtraCheese(props.cheeseOption[1].id);
    expect(wrapper.state().extraCheese).toEqual(props.cheeseOption[1].id);
  });

 it('call "onChangeQuantity" function', ()=>{
   instance.onChangeQuantity(5);
   expect(wrapper.state().quantity).toEqual(5);
 });
})

it('test "addPizzaToList" to be called when clicked "Add to List"', ()=>{
  const props = {
    typeOption: [{id: "chonkyChicken", name: "Chonky Chicken", price: 10}],
    sizeOption: [{id: "small", name: "Small"}],
    cheeseOption: [{id: "yes", name: "Yes"}],
    addPizzaToList: jest.fn()
  };

  const wrapper = render(
    <PizzaForm {...props} />
  );
  fireEvent.click(screen.getByText("Add to List"))
  expect(props.addPizzaToList).toHaveBeenCalledWith({
    pizzaType: props.typeOption[0].id,
    pizzaSize: props.sizeOption[0].id,
    extraCheese: props.cheeseOption[0].id,
    quantity: 1
  });
})
