import {configureStore} from '@reduxjs/toolkit';
import orderReducer from './reducer/orderSlice';
import pizzaReducer from './reducer/pizzaSlice';

export default configureStore({
    reducer: {
        order: orderReducer,
        pizza: pizzaReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
