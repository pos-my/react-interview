import React, { useState, useEffect } from "react";
import { Button, Row, Col, Card } from "react-bootstrap";
import { PizzaProperty } from "../pizza_property/PizzaProperty";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../../store/reducers/cart/action";
import { v4 as uuidv4 } from "uuid";
import { Route } from "../../helper/route";
import { pizzaList } from "../../helper/static";

export function Pizza() {
  const route = Route();
  const dipatch = useDispatch();
  const cuurenItems = useSelector((state) => state.info.CartInfo);

  // states
  const [list, setList] = useState([]);
  const [pizzaType, setPizzaType] = useState(undefined);
  const [pizzaProp, setpizzaProp] = useState({
    extraCheese: undefined,
    quantity: 0,
    size: undefined,
  });

  // functions
  const routeChange = (path) => {
    route.routeChange(path);
  };

  const getPizzaType = (event) => {
    const pizzaInfo = pizzaList.find((x) => x.name === event.target.value);
    if (pizzaInfo !== null || pizzaInfo !== undefined) {
      setPizzaType(pizzaInfo);
    }
  };

  const onChangeValue = (event) => {
    setpizzaProp({
      ...pizzaProp,
      [event.target.name]: event.target.value,
    });
  };

  const validateOrder = () => {
    if (
      pizzaType === undefined ||
      pizzaProp.extraCheese === undefined ||
      pizzaProp.quantity <= 0 ||
      pizzaProp.size === undefined
    ) {
      return false;
    }
    return true;
  };

  const add = () => {
    const isValid = validateOrder();
    if (!isValid) {
      alert("Please complete your order by completing the mandatory fields..!!");
      return;
    }
    const order = {
      Id: uuidv4(), // unique id to each order
      pizza: pizzaType.name,
      extraCheese: pizzaProp.extraCheese,
      size: pizzaProp.size,
      qty: pizzaProp.quantity,
      price: pizzaProp.quantity * pizzaType.price,
    };
    dipatch(AddToCart([...cuurenItems, order]));
    alert(pizzaType.name + " has been added successfuly to the cart!");

    // reset the parameters
    setPizzaType(undefined);
    setpizzaProp({
      extraCheese: undefined,
      quantity: 0,
      size: undefined,
    });
  };

  useEffect(() => {
    if (list.length === 0) {
      const typeList = pizzaList.map((x ,i ) => (
        <Col md="4" key={x.Id}>
          <label>{x.name}</label>&nbsp;
          <input  aria-label="type-input"  data-testid={"type-" + i + "-input"} type="radio" value={x.name} name="type" />
        </Col>
      ));

      setList(typeList);
    }
  }, [list]);

  // to render
  return (
    <div
      className="content"
      style={{
        padding: "30px 10px 10px 10px",
        marginLeft: "180px",
        marginRight: "180px",
      }}
    >
      <Card style={{ backgroundColor: "#CCE5FF" }}>
        <Card.Body>
          <Card.Title>Choose your meal :</Card.Title>
          <Row onChange={getPizzaType}>{list}</Row>
        </Card.Body>
      </Card>
      <br /> <br />
      {pizzaType !== undefined ? (
        <Card style={{ backgroundColor: "#CCFFCC" }}>
          <Card.Body>
            <Card.Title>Manage your order :</Card.Title>
            <PizzaProperty changeHandler={onChangeValue} />
          </Card.Body>
        </Card>
      ) : null}
      <br /> <br />
      <div>
        <Button
          style={{ padding: "10px 20px 10px 20px", marginRight: "20px" }}
          variant="success"
          onClick={() => routeChange("cart")}
        >
          My Cart
        </Button>
        <Button
          style={{ padding: "10px 20px 10px 20px" }}
          variant="info"
          onClick={add}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
