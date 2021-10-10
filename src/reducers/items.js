import { createSlice } from "@reduxjs/toolkit";
import { items } from "../data";

const initialState = items;

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    updateItem: (state, action) => {
      const newState = {
        ...state,
        [action.payload.id]: { ...state[action.payload.id], ...action.payload },
      };
      Object.assign(state, newState);
    },
  },
});

export const { updateItem } = itemsSlice.actions;
export default itemsSlice.reducer;
