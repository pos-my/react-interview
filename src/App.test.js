import React from 'react';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import  * as actions  from "./store/actions/repositoryActions";
 
import App from './App';
 
const mockStore = configureStore([thunk]);
 
describe('My Connected React-Redux Component', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      deliveryType:'',
      pizzas:[]
    });
 
    store.dispatch = jest.fn();
 
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
 
  it('should render with given state from Redux store', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
 
  it('should dispatch an action selection of delivery type option', () => {    
    renderer.act(() => {
      var c = component.root.findAllByProps({name:'deliveryType'});
      c[0].props.onChange({target:{value:"delivery"}});
    });
    
    expect(store.dispatch).toHaveBeenCalledTimes(1);  
  });
});