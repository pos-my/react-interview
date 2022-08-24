import { configureStore } from "@reduxjs/toolkit";
import services from "./services";

export const store = configureStore({
  reducer: {
    services,
  },
});
