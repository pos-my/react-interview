import "./Checkout.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { emptyCart } from "../../common/actions";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

function Checkout() {
  const cartStatus = useSelector((state) => state.cartReducer);
  const itemList = useSelector((state) => state.itemReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(emptyCart());
  };
  const genRandom = () => {
    return Math.random().toString(36).substring(2,7);
  }

  useEffect(() => {
    let onClose = document.getElementById('confirm-order');
    onClose.addEventListener('hidden.bs.modal', (event) => {
    clearCart();
    navigate("/");
  })
  });

  return (
    <div>
      <>
        <br />
        <h2>
          <u>ORDER DETAIL</u>
        </h2>
        <h5>
          {cartStatus.deliveryType === "delivery" ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-box2"
                viewBox="0 0 16 16"
              >
                <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3L2.95.4ZM7.5 1H3.75L1.5 4h6V1Zm1 0v3h6l-2.25-3H8.5ZM15 5H1v10h14V5Z" />
              </svg>{" "}
              | {cartStatus.deliveryType.toUpperCase()}
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="bi bi-bicycle"
                viewBox="0 0 16 16"
              >
                <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
              </svg>{" "}
              | {cartStatus.deliveryType.toUpperCase()}
            </>
          )}
        </h5>
        <ul className="list-group list-group-flush">
          {cartStatus.cart.map((item) => (
            <li className="list-group-item" key={item.id}>
              <b>{itemList[item.itemId - 1].name}</b>
              <p>
                {" "}
                {item.size} | {item.quantity} | $
                {itemList[item.itemId - 1].price}
                <br />
                Extra Cheese : {item.extraCheese ? "Yes" : "No"}
                <br />
                <b>$ {item.quantity * itemList[item.itemId - 1].price}</b>
              </p>
            </li>
          ))}
          <li className="list-group-item">
            <h1>TOTAL : ${cartStatus.total}</h1>
          </li>
        </ul>
        <Link to="/">
          <button className="btn btn-outline-secondary checkout-spacing-button" onClick={clearCart}>Cancel</button>
        </Link>

        {/* <!-- Button trigger modal --> */}
        <button
          type="button"
          className="btn btn-danger checkout-spacing-button"
          data-bs-toggle="modal"
          data-bs-target="#confirm-order"
        >
          Confirm?
        </button>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="confirm-order"
          tabIndex={"-1"}
          aria-labelledby="confirm-orderLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirm-orderLabel">
                  ORDER ID : <b>{genRandom()}</b>
                </h5>
              </div>
              <div className="modal-body">
                <p>Thanks for puchasing with us! <br/>
                   Please state your order ID if requested.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Home</button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Checkout;
