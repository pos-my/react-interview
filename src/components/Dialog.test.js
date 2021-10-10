import React from "react";
import { render } from "@testing-library/react";
import { Dialog } from "./index";

describe("Dialog Component", () => {
  let getByTestId;
  const props = {
    show: true,
    children: "test content",
    onClose: () => {},
  };

  beforeEach(() => {
    const { getByTestId: getByTestIdRenamed } = render(
      <>
        <Dialog {...props} />
      </>
    );
    getByTestId = getByTestIdRenamed;
  });

  it("should render dialog with correct children", () => {
    const dialogNode = getByTestId("dialog");
    expect(dialogNode).toBeVisible();
    expect(dialogNode.textContent).toBe(props.children);
  });
});
