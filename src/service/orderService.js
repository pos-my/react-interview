import {actionAddOrder, actionRemoveOrder, actionResetOrder} from "../reducer/orderSlice";


export const addNewOrder = (order) => (dispatch) => {
    dispatch(actionAddOrder(order))
}

export const removeOrder = (index) => (dispatch) => {
    dispatch(actionRemoveOrder(index));
}

export const cancelOrder = () => (dispatch) => {
    dispatch(actionResetOrder())
}