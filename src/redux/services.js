import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: "",
  pizza: null,
  selectedPizza: null,
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
    updateSelectedPizza: (state, action) => {
      state.selectedPizza = action.payload;
    },
  },
});

export const { updateService, updatePizza, updateSelectedPizza } =
  services.actions;

export default services.reducer;
