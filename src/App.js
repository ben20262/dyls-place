import React from 'react'
import { 
  BrowserRouter  as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import './App.css';


import SellerContainer from './containers/SellerContainer'
import CarContainer from './containers/CarContainer'

function App() {
	return (
		<div className="App">
			<nav>
				<ul>
					<li><Link to='/'>Cars</Link></li>
					<li><Link to='/Sellers'>Sellers</Link></li>
				</ul>
			</nav>
			<Switch>
				<Route path='/sellers'>
					<SellerContainer />
				</Route>
				<Route path='/'>
					<CarContainer />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
