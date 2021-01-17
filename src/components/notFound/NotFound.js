import React from "react";
import { Button } from "react-bootstrap";
import { Route } from "../../helper/route";

export function NotFound() {
  const route = Route();

  const routeChange = (path) => {
    route.routeChange(path);
  };

  return (
    <div className="content">
      <h1 style={{paddingTop : "40px"}}>404</h1>
      <br />
      <h3>Page Not Found ....</h3>
      <br /> <br />
      <Button
        style={{ padding: "10px 20px 10px 20px" }}
        variant="primary"
        onClick={(e) => routeChange("/")}
      >
        Back to main page
      </Button>
    </div>
  );
}
