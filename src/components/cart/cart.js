import React from "react";
import { useSelector , useDispatch } from "react-redux";
import { Button } from "react-bootstrap";
import "./cart.css";
import { DeleteFromCart } from "../../store/reducers/cart/action";
import { Route } from "../../helper/route";

export function Cart() {

  const cartInfo = useSelector((state) => state.info.CartInfo);
  const dipatch = useDispatch();
  const route = Route();

  // functions
  const removeFromList = (id) => {
    dipatch(DeleteFromCart(id));
  };

  const routeChange = (path) => {
    route.routeChange(path);
  };

  const renderTableData = () => {
    return cartInfo.map((info, index) => {
      const { Id, pizza, extraCheese, size, qty, price } = info; //destructuring
      return (
        <tr id="row-content" key={Id}>
          <td>{pizza}</td>
          <td>{extraCheese}</td>
          <td>{size}</td>
          <td>{qty}</td>
          <td>{price}</td>
          <td>
            {" "}
            <Button
              style={{ padding: "10px 20px 10px 20px" }}
              variant="danger"
              id={Id}
              onClick={() => removeFromList(Id)}
            >
              Remove
            </Button>
          </td>
        </tr>
      );
    });
  };

  // to render
  return (
    <div style={{ paddingLeft: "90px" , paddingTop: "50px", width: "80%" }}>
      <h1 id="title">My Cart</h1>
      {cartInfo.length !== 0 ? (
        <div>
          <table className="content" id="items">
          <thead>
            <tr>
              <th>PIZZA</th>
              <th>Extra Cheese</th>
              <th>SIZE</th>
              <th>QTY</th>
              <th>PRICE($)</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
        <br />
        <Button
          style={{ padding: "10px 20px 10px 20px" , display: "flex" , marginLeft : "auto" , marginTop : "20px" }}
          variant="primary"
          onClick={(e) => routeChange("checkout")}
        >
          Check Out
        </Button>
        </div>
      ) : (
        <div className="content" style={{ paddingTop : "90px" }}>
          <h1 data-testid="empty-type">your cart is empty .... :(</h1>
          <br />
          <Button
            style={{ padding: "10px 20px 10px 20px" }}
            variant="info"
            onClick={() => routeChange("/")}
          >
            Back to home page
          </Button>
        </div>
      )}
    </div>
  );
}
