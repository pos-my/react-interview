import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const shippingTypeSlice = createSlice({
  name: "shippingType",
  initialState,
  reducers: {
    setShippingType: (state, action) => {
      return action.payload;
    },
  },
});

export const { setShippingType } = shippingTypeSlice.actions;
export default shippingTypeSlice.reducer;
