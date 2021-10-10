import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const shippingTypeSlice = createSlice({
  name: "shippingType",
  initialState,
  reducers: {
    setShippingType: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setShippingType } = shippingTypeSlice.actions;
export default shippingTypeSlice.reducer;
