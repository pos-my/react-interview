import React from "react";
import { Home } from "../screens";
import renderConnected from "../utils/renderConnected";

describe("Home Screen Component", () => {
  it("should render pickup and delivery buttons", () => {
    const utils = renderConnected(<Home />, {});
    const getByTestId = utils.getByTestId;
    const pickupButtonNode = getByTestId("pickup-button");
    const deliveryButtonNode = getByTestId("delivery-button");
    expect(pickupButtonNode).toBeVisible();
    expect(deliveryButtonNode).toBeVisible();
  });
});
