import {createSlice} from "@reduxjs/toolkit";

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        list: [],
        type: undefined
    },
    reducers: {
        actionAddOrder: (state, action) => {
            state.list = [...state.list, action.payload];
        },
        actionSetOrderType: (state, action) => {
            state.type = action.payload;
        },
        actionRemoveOrder: (state, action) => {
            state.list = [
                ...state.list.slice(0, action.payload),
                ...state.list.slice(action.payload + 1)
            ];
        },
        actionResetOrder: (state) => {
            state.type = undefined;
            state.list = [];
        }
    },
})

export const { actionAddOrder, actionSetOrderType, actionRemoveOrder, actionResetOrder } = orderSlice.actions

export default orderSlice.reducer