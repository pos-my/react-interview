import { combineReducers } from "@reduxjs/toolkit";
import PizzaReducer from './reducer-pizza';
import CartReducer from './reducer-cart';

export default combineReducers({
    pizzas:PizzaReducer,
    cart:CartReducer
})