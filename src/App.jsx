import React, { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "./redux/store";

const Home = lazy(() => import("./views/Home"));
const Order = lazy(() => import("./views/Order"));
const NotFound = lazy(() => import("./views/NotFound"));
const Review = lazy(() => import("./views/Review"));

function App() {
  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
      <Provider store={store}>
        <BrowserRouter>
          <Suspense fallback={<span />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<Order />} />
              <Route path="/review" element={<Review />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
