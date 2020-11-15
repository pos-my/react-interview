import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
 
import MyConnectedComponent from '.';
 
const mockStore = configureStore([]);
 
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      myState: 'sample text',
    });
 
    component = renderer.create(
      <Provider store={store}>
        <MyConnectedComponent />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
 
  });
 
  it('should dispatch an action on button click', () => {
 
  });
});