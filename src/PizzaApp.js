import React from 'react';
import Home from "./components/home";
import Checkout from "./components/checkout";
import {Route, Routes} from "react-router-dom";
import NotFound from "./components/notFound";
import SelectPizza from "./components/selectPizza";
import Thankyou from "./components/thankyou";

const PizzaApp = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="select" element={<SelectPizza/>}/>
            <Route path="checkout" element={<Checkout/>}/>
            <Route path="thankyou" element={<Thankyou/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default PizzaApp;