import React from "react";
import {
	Route,
	BrowserRouter as Router,
	Switch,
	Redirect,
} from 'react-router-dom';
import Login from './Pages/Login/Login.js';
import Register from './Pages/Register/Register.js';
import Dash from './Pages/Dash/Dash.js';
import NotFound from './Pages/NotFound/NotFound.js';
import ClassSearch from "./Pages/class-search/ClassSearch";
import InstructorLanding from './Pages/instructor/instructor-landing';
import ClassManage from "./Pages/class-manage-user/ClassManage";

const Routes = (props) => {
	return (
			<Router {...props}>
			<Switch>
				<Route path='/instructor'>
					<InstructorLanding />	
				</Route>
					<Route path="/Login">
						<Login />
					</Route>
					<Route path="/register">
						<Register />
					</Route>
					<Route path="/Dash">
						<Dash />
					</Route>
					<Route path="/class-search">
						<ClassSearch />
					</Route>
					<Route path="/manage-class">
						<ClassManage />
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
