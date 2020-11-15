import React from "react";
//import "./App.css";

import RouteComponent from "./components/route/route";
import HeaderComponent from "./components/header/header";

import Aux from "./components/hoc/Auxiliary";

function App() {
  return(
    <Aux>
        <div className="container">
        <HeaderComponent />
        <RouteComponent />
        </div>
    </Aux>
  ) 
  
  
}

export default App;
