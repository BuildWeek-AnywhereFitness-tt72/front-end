import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dash from './Pages/dash/Dash.js';
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
					<Route path="/dash">
						<Dash />
					</Route>
					<Route path="/classes/search">
						<ClassSearch />
					</Route>
					<Route path="/classes/manage">
						<ClassManage />
					</Route>
					<Route exact path="/">
						<Redirect to="/dash" />
					</Route>
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		);
};

export default Routes;
