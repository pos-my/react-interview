import React from "react";
import Header from "./Header";


const NotFound = () => (
    <div className="c-not-found">
        <Header />
        <div className="c-not-found__content">
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    </div>
);

export default NotFound;
