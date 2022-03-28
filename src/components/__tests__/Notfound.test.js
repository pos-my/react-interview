import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Notfound from '../Notfound';
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

describe('notfound page', () => {
  beforeEach(() => {
    wrapper = mount(<Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Notfound/>
        </BrowserRouter>
      </PersistGate>
    </Provider>);
  });

  test('notfound page', () => {
    expect(wrapper.text()).toContain("404");
    expect(wrapper.text()).toContain("not found");
  });
  
});

