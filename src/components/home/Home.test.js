import { cleanup } from "@testing-library/react";
import * as Reducer from "../../store/reducers/delivery/index";
import * as Action from "../../store/reducers/delivery/action";

afterEach(cleanup);

describe("<Home /> unit test", () => {
  it("should store delivery in memory when click delivery button", () => {
    expect(
      Reducer.method({ DeliveryMethod: "delivery" }, Action.DeliveryMethod)
    ).toEqual({ DeliveryMethod: "delivery" });
  });

  it("should store pick up in memory when click pick up button", () => {
    expect(
      Reducer.method({ DeliveryMethod: "pick up" }, Action.DeliveryMethod)
    ).toEqual({ DeliveryMethod: "pick up" });
  });
});
