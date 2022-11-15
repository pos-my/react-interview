import { React, Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import MainPage from './pages/mainpage'
import PizzaCustomisationPage from './pages/pizzacustomisation'
import CheckoutPage from './pages/checkout'
import PageNotFound from './pages/pagenotfound'

class App extends Component {
  	render() {
    	return (
			<div id="mainDiv">
				<Router>
					<Routes>
						<Route path='/' element={<MainPage />} />
						<Route path='/pizzacustomisation' element={<PizzaCustomisationPage />} />
						<Route path='/checkout' element={<CheckoutPage />} />
					
						{/* 404 page not found */}
						<Route path='*' element={<PageNotFound />} />
					</Routes>
				</Router>
			</div>
    	);
  	}
}

export default App;
