import React  from "react";
import { Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

import "./header.css";

export function Header() {
    const count = useSelector(state => state.info.CartInfo);


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="brand" href="/">
        GFK - Assignment 
      </Navbar.Brand>
      <Navbar.Collapse id="basic-navbar-nav">
        <Button
          className="btnStyle"
          variant="outline-success"
          style={{ flex: "left" }}
          href="/cart"
        >
          Cart ( {count.length} )
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
}
