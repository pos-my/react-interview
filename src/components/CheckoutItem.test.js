import React from "react";
import { render } from "@testing-library/react";
import { CheckoutItem } from "./index";
import { items } from "../data";

describe("CheckoutItem Component", () => {
  let getByTestId;
  const item = Object.values(items)[0];
  const props = { item: { ...item, quantity: 2 } };

  beforeEach(() => {
    const { getByTestId: getByTestIdRenamed } = render(
      <CheckoutItem {...props} />
    );
    getByTestId = getByTestIdRenamed;
  });

  it("should render checkout item", () => {
    const itemNode = getByTestId("item");
    expect(itemNode).toBeVisible();
  });

  it("should render the correct name", () => {
    const nameNode = getByTestId("name");
    expect(nameNode.textContent).toBe(item.name);
  });

  it("should render the correct label & size", () => {
    const sizeNode = getByTestId("size");
    const label = sizeNode.children[0].textContent;
    const value = sizeNode.children[1].textContent;
    expect(label).toBe("Size");
    expect(value).toBe(item.size);
  });

  it("should render the correct label & cheese option", () => {
    const cheeseNode = getByTestId("cheese");
    const label = cheeseNode.children[0].textContent;
    const value = cheeseNode.children[1].textContent;
    expect(label).toBe("Cheese");
    expect(value).toBe(item.cheese ? "Yes" : "No");
  });

  it("should render the correct label & quantity", () => {
    const quantityNode = getByTestId("quantity");
    const label = quantityNode.children[0].textContent;
    const value = parseInt(quantityNode.children[1].textContent);
    expect(label).toBe("Qty");
    expect(value).toBe(props.item.quantity);
  });
});
