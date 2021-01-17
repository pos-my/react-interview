import { createStore, combineReducers } from "redux";
import { cart } from "./reducers/cart";
import { method } from "./reducers/delivery"

const rootReducers = combineReducers({
    info : cart , 
    deliveryMethod : method
})

const persistedState = localStorage.getItem('state') 
                       ? JSON.parse(localStorage.getItem('state'))
                       : {}


export const store = createStore(rootReducers , 
                    persistedState,
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
  })