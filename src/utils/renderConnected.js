import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../reducers";

const renderConnected = (ui, { ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  );
  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export default renderConnected;
