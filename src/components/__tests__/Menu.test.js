import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Menu from '../Menu';
import {
  BrowserRouter,
  useNavigate
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../../reducers'
import PizzaReducer from '../../reducers/reducer-pizza'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
const mockedUsedNavigate = jest.fn();
let wrapper;
wrapper = mount(<Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
      <Menu navigate={mockedUsedNavigate}/>
    </BrowserRouter>
  </PersistGate>
</Provider>);
describe('initial success page', () => {
  
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu navigate={mockedUsedNavigate}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });

  test('menu page', () => {
    expect(wrapper.text()).toContain("Menu");
  });
  test('test initial data', () => {
    const data = {pizzas:PizzaReducer(),cart:[]};
    let test_data=wrapper.find('Menu').props();
    expect(test_data).toMatchObject(data);
  });
});

describe('test modals', () => {
  
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu navigate={mockedUsedNavigate}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });
  [1,2,3,4,5].forEach((pizza) => {
    test('test modals '+pizza, () => {
      wrapper.find('ListGroupItem.pizza_'+pizza).simulate('click');
      expect(wrapper.find('Menu').state().show).toEqual(true);
      expect(wrapper.find('Menu').state().selected.id).toEqual(pizza);
    });
  });
});

describe('test add and remove item', () => {
  
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Menu navigate={mockedUsedNavigate}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });
  [1,2,3,4,5].forEach((pizza) => {
    [1,2,3].forEach((size) => {
      [0,1].forEach((cheese) => {
        [...Array(4).keys()].forEach((quantity) => {
          test('test add '+pizza+' with size '+size+' and cheese '+cheese+' with quantity '+quantity+1, () => {
            wrapper.find('ListGroupItem.pizza_'+pizza).simulate('click');
            wrapper.find('Menu').setState({temp_cart:[]});
            wrapper.find('form.temp_cart').simulate('submit',{target:{size:{value:size},cheese:{value:cheese}}});
            //+button
            [...Array(quantity).keys()].forEach(()=>{wrapper.find('button.btn-success').simulate('click')});
            expect(wrapper.find('Menu').state().temp_cart).toMatchObject([ { size: size, cheese: cheese, quantity: quantity+ 1 } ]);
            let price = wrapper.find('Menu').props().pizzas[pizza-1].price;
            if(size==2)price+=2;
            if(size==3)price+=4;
            if(cheese==1)price+=1;
            expect(wrapper.find('.temp_price').text()).toEqual('$'+(price)*(quantity+1));
            //- button
            [...Array(quantity).keys()].forEach(()=>{wrapper.find('button.btn-danger').simulate('click')});
            expect(wrapper.find('Menu').state().temp_cart).toMatchObject([ { size: size, cheese: cheese, quantity: 1 } ]);
            //check price
            expect(wrapper.find('.temp_price').text()).toEqual('$'+(price));
            //type number
            wrapper.find('.quantity_input').simulate('change', { target: { value: '50',id:0 } })
            expect(wrapper.find('.temp_price').text()).toEqual('$'+(price*50));
            if(cheese==0){
              wrapper.find('form.temp_cart').simulate('submit',{target:{size:{value:size},cheese:{value:1}}});
              var saved_object=[ { size: size, cheese: 0, quantity: 50 },{ size: size, cheese: 1, quantity: 50 } ];
            }
            else
            {
              wrapper.find('form.temp_cart').simulate('submit',{target:{size:{value:size},cheese:{value:0}}});
              var saved_object=[ { size: size, cheese: 1, quantity: 50 },{ size: size, cheese: 0, quantity: 50 } ];
            }
            wrapper.find('.quantity_input').at(1).simulate('change', { target: { value: '50',id:1 } })
            wrapper.find('button.save_button').simulate('click');
            expect(wrapper.find('Menu').props().cart[pizza]).toMatchObject(saved_object);
          });
        });
      });
    });
  });
});
