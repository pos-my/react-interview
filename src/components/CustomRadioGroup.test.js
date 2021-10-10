import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { RadioGroup } from "./index";
import { cheeseOptions } from "../data/index";

describe("RadioGroup Component", () => {
  let getByTestId;
  let getByRole;
  let mockCallback = jest.fn();
  const props = {
    id: 1,
    label: "Extra Cheese?",
    controls: cheeseOptions,
    defaultValue: true,
    onChange: mockCallback,
  };

  beforeEach(() => {
    const { getByTestId: getByTestIdRenamed, getByRole: getByRoleRenamed } =
      render(<RadioGroup {...props} />);
    getByTestId = getByTestIdRenamed;
    getByRole = getByRoleRenamed;
  });

  it("should render correct options and label", () => {
    const labelNode = getByTestId("label");
    expect(labelNode.textContent).toBe(props.label);
    cheeseOptions.forEach((option) => {
      const controlNode = getByTestId(`control-${option.id}`);
      expect(controlNode.textContent).toBe(option.label);
    });
  });

  it("should render with correct default value", () => {
    const buttonNode = getByRole("radio", {
      name: "Yes",
    });
    expect(buttonNode.checked).toBe(true);
  });

  it("should change the selected control's checked value to true on click", () => {
    const noButtonNode = getByRole("radio", {
      name: "No",
    });
    const yesButtonNode = getByRole("radio", {
      name: "Yes",
    });

    expect(noButtonNode.checked).toBe(false);
    expect(yesButtonNode.checked).toBe(true);
    fireEvent.change(noButtonNode, { target: { checked: true } });
    expect(noButtonNode.checked).toBe(true);
    expect(yesButtonNode.checked).toBe(false);
  });
});
