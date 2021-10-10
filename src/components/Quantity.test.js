import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Quantity } from "./index";

describe("Quantity Component", () => {
  let getByTestId;
  let mockCallback = jest.fn();
  const props = { id: 1, onChange: mockCallback };

  beforeEach(() => {
    const { getByTestId: getByTestIdRenamed } = render(<Quantity {...props} />);
    getByTestId = getByTestIdRenamed;
  });

  test("should render with value 0", () => {
    const valueWrapper = getByTestId("value");
    const valueNode = valueWrapper.children[0].children[0];
    expect(valueNode).toHaveValue("0");
  });

  test("should return the correct id and value on increment", () => {
    const buttonNode = getByTestId("increment-button");
    fireEvent.click(buttonNode);
    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockCallback).toHaveBeenCalledWith(props.id, 1);
  });

  test("should return the correct id and value on decrement", () => {
    const incrementButtonNode = getByTestId("increment-button");
    const decrementButtonNode = getByTestId("decrement-button");
    fireEvent.click(incrementButtonNode);
    fireEvent.click(incrementButtonNode);
    fireEvent.click(incrementButtonNode);
    fireEvent.click(decrementButtonNode);
    expect(mockCallback).toHaveBeenCalledTimes(4);
    const valueWrapper = getByTestId("value");
    const valueNode = valueWrapper.children[0].children[0];
    expect(valueNode).toHaveValue("2");
  });

  test("should not decrement if value is already 0", () => {
    const decrementButtonNode = getByTestId("decrement-button");
    fireEvent.click(decrementButtonNode);
    fireEvent.click(decrementButtonNode);
    fireEvent.click(decrementButtonNode);
    const valueWrapper = getByTestId("value");
    const valueNode = valueWrapper.children[0].children[0];
    expect(valueNode).toHaveValue("0");
  });
});
