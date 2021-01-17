import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { EmtypCart } from "../../store/reducers/cart/action";
import { Route } from "../../helper/route";
import "./checkout.css";

export function CheckOut() {
  const cartInfo = useSelector((state) => state.info.CartInfo);
  const delivery = useSelector((state) => state.deliveryMethod.DeliveryMethod);
  const dispatch = useDispatch();
  const route = Route();
  const totalPrice = cartInfo.reduce((s, f) => {
    return s + f.price;
  }, 0);

  const [show, setShow] = useState(false);

  // functions
  const routeChange = (path) => {
    route.routeChange(path);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const renderTableData = () => {
    return cartInfo.map((info, index) => {
      const { Id, pizza, extraCheese, size, qty, price } = info; //destructuring
      return (
        <tr id="row-content"  key={Id}>
          <td>Pizza : {pizza}</td>
          <td>Extra Cheese : {extraCheese}</td>
          <td>Size : {size}</td>
          <td>Quantity : {qty}</td>
          <td>Price : {price}</td>
        </tr>
      );
    });
  };

  const confirm = () => {
    setTimeout(() => {
      dispatch(EmtypCart());
    }, 2000);
    
    handleShow();
  };

  // to render
  return (
    <div
      className="content"
      style={{ paddingLeft: "90px", width: "80%", paddingTop: "150px" }}
    >
      {cartInfo.length !== 0 ? (
        <div>
          <h3>Order Summary : </h3>
          <br />
          <h5 data-testid="delivery-method">Delivery Method : {delivery}</h5>
          <br />
          <table id="items">
            <tbody>{renderTableData()}</tbody>
          </table>
          <br />
          <h4 data-testid="price">Total Price : {totalPrice}</h4>
          <br />
          <Button
            style={{ padding: "10px 20px 10px 20px", marginRight: "20px" }}
            variant="primary"
            onClick={confirm}
          >
            Confirm
          </Button>
          <Button
            style={{ padding: "10px 20px 10px 20px" }}
            variant="danger"
            onClick={(e) => routeChange("/")}
          >
            Cancel
          </Button>
        </div>
      ) : (
        <div>
          <h1 data-testid="empty-cart">your have nothing to checkout .... :(</h1>
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

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Congratulations..</Modal.Title>
        </Modal.Header>
        <Modal.Body>We received your order , and we will serve you soon!!</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => routeChange('/')}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
