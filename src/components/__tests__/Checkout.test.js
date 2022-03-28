import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Checkout from '../Checkout';
import {
  BrowserRouter
} from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from '../../reducers'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);
let store = createStore(persistedReducer);
let persistor = persistStore(store);
let wrapper;

describe('success page', () => {
  beforeAll(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Checkout/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });

  test('checkout page', () => {
    expect(wrapper.text()).toContain("Order Summary");
  });

});

describe('test order summary', () => {
  beforeAll(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Checkout/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });
  let pizza_data=[];
  [1,2,3,4,5].forEach((pizza) => {
    [1,2,3].forEach((size) => {
      [0,1].forEach((cheese) => {
        [...Array(2).keys()].forEach((quantity) => {
          test('pizza '+pizza+' with size '+size+' and cheese '+cheese+' with quantity '+quantity+1, () => {
            let temp_cart=JSON.parse(JSON.stringify(pizza_data));
            temp_cart.push({size:size,cheese:cheese,quantity:quantity+1});
            wrapper.find('Checkout').props().reducerCart(pizza,temp_cart);
            wrapper = mount(<Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter>
                  <Checkout/>
                </BrowserRouter>
              </PersistGate>
            </Provider>);
            wrapper.update();
            let test_price=0;
            let test_quantity=0
            wrapper.find('Checkout').props().cart.forEach((item,index)=>{
              item.forEach((item2,index2)=>{
                if(index>0){
                  let temp_price = wrapper.find('Checkout').props().pizzas[index-1].price;
                  if(item2.size==2)temp_price+=2;
                  if(item2.size==3)temp_price+=4;
                  if(item2.cheese==1)temp_price+=1;
                  temp_price*=(item2.quantity);
                  test_price+=temp_price;
                  test_quantity+=item2.quantity;
                }
              })
            })
            expect(wrapper.find('.total_price').text()).toEqual('Total Price: $'+test_price);
            expect(wrapper.find('.total_quantity').text()).toEqual(test_quantity.toString());
          });
        });
        pizza_data.push({size:size,cheese:cheese,quantity:2});
      });
    });
  });
});