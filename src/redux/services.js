import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  services: "",
  pizza: [],
};

export const services = createSlice({
  name: "services",
  initialState,
  reducers: {
    updateService: (state, action) => {
      state.services = action.payload;
    },
  },
});

export const { updateService } = services.actions;

export default services.reducer;
