import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: "",
  pizza: null,
};

export const services = createSlice({
  name: "services",
  initialState,
  reducers: {
    updateService: (state, action) => {
      state.services = action.payload;
    },
    updatePizza: (state, action) => {
      state.pizza = action.payload;
    },
  },
});

export const { updateService, updatePizza } = services.actions;

export default services.reducer;
