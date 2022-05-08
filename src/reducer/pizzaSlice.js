import {createSlice} from "@reduxjs/toolkit";

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState: {
        data: [],
        status: 'NOT_STARTED'
    },
    reducers: {
        actionFetchPizzaStarted: (state) => {
            state.status = 'STARTED'
        },
        actionFetchPizzaCompleted: (state, action) => {
            state.data = action.payload
            state.status = 'COMPLETED'
        },
    },
})

export const { actionFetchPizzaStarted, actionFetchPizzaCompleted  } = pizzaSlice.actions

export default pizzaSlice.reducer