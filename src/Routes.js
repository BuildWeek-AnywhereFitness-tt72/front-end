import React from 'react';
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import Login from './Pages/Login/Login.js';
// import Register from './Pages/Register/Register.js';
import Dash from './Pages/Dash/Dash.js';
import NotFound from './Pages/NotFound/NotFound.js';
import SearchHeader from "./Pages/class-search/ClassSearch"

const Routes = (props) => {
	return (
			<Router {...props}>
				<Switch>
					<Route path="/Login">
						<Login />
						<SearchHeader />
					</Route>
					{/* <Route path="/register">
						<Register />
					</Route> */}
					<Route path="/Dash">
						<Dash />
					</Route>
					<Route exact path="/">
						<Redirect to="/Dash" />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		);
};

export default Routes;
