import { createSelector } from "@reduxjs/toolkit";

export const services = createSelector(
  (state) => state.services,
  (services) => services.services
);

export const listPizza = createSelector(
  (state) => state.services,
  (services) => services.pizza
);
