import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dash from './Pages/Dash/Dash';
import NotFound from './Pages/NotFound/NotFound.js';
// import ClassSearch from './Pages/class-search/ClassSearch';
import ClassSearch from './Pages/class-search2/ClassSearch';
import InstructorLanding from './Pages/instructor/instructor-landing';
import ClassManage from "./Pages/class-manage-user/ClassManage";
import PrivateRoute from "./Pages/privateRoute/PrivateRoute";

const Routes = (props) => {
	return (
		<Router {...props}>
			<Switch>
				<PrivateRoute path="/instructor" component={InstructorLanding} />
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/register">
					<Register />
				</Route>
				<Route path="/dash">
					<Dash />
				</Route>
				<PrivateRoute path="/classes/search" component={ClassSearch} />
          		<PrivateRoute path="/classes/manage" component={ClassManage} />
				<Route exact path="/classes/">
					<Redirect to="/classes/search" />
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
