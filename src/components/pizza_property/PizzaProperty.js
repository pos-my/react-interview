import React from "react";
import { Row, Col } from "react-bootstrap";

export function PizzaProperty(props) {
  return (
    <div onChange={props.changeHandler}>
      <Row>
        <Col md="12">
          <label>Size* :</label>&nbsp;&nbsp;{" "}
          <label style={{ marginRight: "22px" }}>
            Small &nbsp;
            <input type="radio" value="small" name="size" />{" "}
          </label>
          <label style={{ marginRight: "22px" }}>
            Medium &nbsp;
            <input type="radio" value="medium" name="size" />{" "}
          </label>
          <label style={{ marginRight: "22px" }}>
            Large &nbsp;
            <input type="radio" value="large" name="size" />{" "}
          </label>
          <br />
        </Col>
        <Col md="12">
          <label style={{ marginRight: "22px" }}>Extra cheese* :</label>
          &nbsp;&nbsp;{" "}
          <label>
            Yes &nbsp;
            <input type="radio" value="Yes" name="extraCheese" />{" "}
          </label>
          <label style={{ marginLeft: "22px" }}>
            No &nbsp;
            <input type="radio" value="No" name="extraCheese" />{" "}
          </label>
          <br />
        </Col>
        <Col md="12">
          <label>Quantity* :</label>&nbsp;&nbsp;{" "}
          <input  aria-label="quantity-input" type="number" min="0" name="quantity" />
        </Col>
      </Row>
    </div>
  );
}
