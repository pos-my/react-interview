import { checkPropTypes } from "prop-types";
import { createStore } from "redux";
import allReducer from "./common/reducers";

export const findTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) => {
    const propsErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
    return propsErr;
}

export const testStore = (defaultState) => {
    const store = createStore( allReducer, defaultState );
    return store;
}