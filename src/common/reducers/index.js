import cartReducer from "./cart";
import itemReducer from "./item";

import { combineReducers } from "redux";

const allReducer = combineReducers({
    cartReducer,
    itemReducer
});

export default allReducer