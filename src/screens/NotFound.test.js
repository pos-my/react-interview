import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "../screens";

describe("Not Found Screen Component", () => {
  it("should render the correct message", () => {
    const { getByTestId } = render(<NotFound />);
    const notFoundTextNode = getByTestId("not-found-text");
    expect(notFoundTextNode).toBeVisible();
    expect(notFoundTextNode.textContent).toBe("Page not found!");
  });
});
