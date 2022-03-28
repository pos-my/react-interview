import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Success from '../Success';
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

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)
let wrapper;

describe('success page', () => {

  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Success/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });

  test('Success page', () => {
    expect(wrapper.text()).toContain("Order Completed");
    expect(wrapper.text()).toContain("Thank You");
    expect(wrapper.find('Link[to="/"]').exists()).toEqual(true);
  });

  
});

