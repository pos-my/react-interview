import { combineReducers, configureStore } from "@reduxjs/toolkit";
import itemsReducer from "./items";
import shippingTypeReducer from "./shippingType";

const rootReducer = combineReducers({
  items: itemsReducer,
  shippingType: shippingTypeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  shippingType: shippingTypeReducer,
});
