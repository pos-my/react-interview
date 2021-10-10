import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./index";

describe("CustomButton Component", () => {
  let getByTestId;
  const mockCallback = jest.fn();
  const props = {
    label: "test button",
    dataTestID: "test-button",
    onClick: mockCallback,
  };

  beforeEach(() => {
    const { getByTestId: getByTestIdRenamed } = render(<Button {...props} />);
    getByTestId = getByTestIdRenamed;
  });

  it("should render correct label", () => {
    const buttonNode = getByTestId(props.dataTestID);
    expect(buttonNode).toBeVisible();
    expect(buttonNode.textContent).toBe(props.label);
  });

  it("should call the correct handler onClick", () => {
    const buttonNode = getByTestId(props.dataTestID);
    fireEvent.click(buttonNode);
    expect(mockCallback).toHaveBeenCalled();
    expect(mockCallback).toHaveBeenCalledTimes(1);
  });
});
