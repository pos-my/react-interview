import React from "react";
import { render } from "@testing-library/react";
import { Card } from "./index";
import { items } from "../data/index";

describe("Card Component", () => {
  let getByTestId;
  let mockCallback = jest.fn();
  const item = Object.values(items)[0];
  const props = {
    item,
    onChange: mockCallback,
  };

  beforeEach(() => {
    const { getByTestId: getByTestIdRenamed } = render(<Card {...props} />);
    getByTestId = getByTestIdRenamed;
  });

  it("should render card", () => {
    const cardNode = getByTestId("card");
    expect(cardNode).toBeVisible();
  });

  it("should display the correct title and price", () => {
    const titleNode = getByTestId("card-title");
    const titleText = titleNode.children[0].textContent;
    const priceText = titleNode.children[1].textContent;
    expect(titleText).toBe(item.name);
    expect(priceText).toBe(item.price.toString());
  });
});
