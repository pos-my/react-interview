import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation
} from "react-router-dom";
import NotFound from './components/Notfound';
import Home from './components/Home';
import Menu from './components/Menu'
import Checkout from './components/Checkout'
import Success from './components/Success'
import 'bootstrap/dist/css/bootstrap.min.css';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import store from './store/index'

let persistor = persistStore(store);
function Root() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(['/Menu', '/checkout'].includes(location.pathname) && store.getState().cart.length===0) navigate('/')
    else if(['/checkout'].includes(location.pathname) && store.getState().cart.length===1) navigate('/')
  });
  return (
    <Routes >
      <Route path="/" element={<Home/>} />
      <Route path="/menu" element={<Menu/>} />
      <Route path="/checkout" element={<Checkout/>} />
      <Route path="/success" element={<Success/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes >
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </PersistGate>
    </Provider> 
  );
}

export default App;
