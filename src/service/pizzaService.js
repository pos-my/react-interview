import {actionFetchPizzaCompleted, actionFetchPizzaStarted} from "../reducer/pizzaSlice";
import {testData} from "../utils/constants";

export const fetchPizza = () => (dispatch) => {
    dispatch(actionFetchPizzaStarted());
    setTimeout(() => {
        dispatch(actionFetchPizzaCompleted([...testData]));
    }, 1000);

}