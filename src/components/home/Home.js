import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { DeliveryMethod } from "../../store/reducers/delivery/action";
import { Route } from "../../helper/route";
import "./Home.css";

export function Home() {
  
  const dispatch = useDispatch();
  const route = Route();

  const routeChange = (path , method) => {
    dispatch(DeliveryMethod(method));
    route.routeChange(path);
  };

  return (
    <div className="content">
      <Card>
        {/* <Card.Img
          variant="top"
          className="container-div"
          src="https://images.saymedia-content.com/.image/t_share/MTc0Mzc4NTY2MjIwNjUzOTI4/best-burger-restaurant-names.jpg"
        /> */}
        <Card.Body>
          <Card.Title>LET'S START ORDERING</Card.Title>
          <br />
          <Button
            style={{ padding: "10px 20px 10px 20px", marginRight: "20px" }}
            variant="primary"
            onClick={(e) => routeChange("types" , "Pick Up")}
          >
            Pick Up
          </Button>
          <Button
            style={{ padding: "10px 20px 10px 20px" }}
            variant="primary"
            onClick={(e) => routeChange("types" , "Delivery")}
          >
            Delivery
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
