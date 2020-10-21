<<<<<<< HEAD
import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from 'react-router-dom';
import Register from './Pages/Register/Register';
import Dash from './Pages/Dash/Dash.js';
=======
import React from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import Dash from './Pages/Dash/Dash';
>>>>>>> 6599f0ec3b0a22bc05089b7a33a1614c4c7a2de9
import NotFound from './Pages/NotFound/NotFound.js';
import ClassSearch from './Pages/class-search/ClassSearch';
import InstructorLanding from './Pages/instructor/instructor-landing';
<<<<<<< HEAD
import ClassManage from './Pages/class-manage-user/ClassManage';
import Login from './Pages/Login/Login.js';
=======
import ClassManage from "./Pages/class-manage-user/ClassManage";
import PrivateRoute from "./Pages/privateRoute/PrivateRoute";
>>>>>>> 6599f0ec3b0a22bc05089b7a33a1614c4c7a2de9

const Routes = (props) => {
	return (
		<Router {...props}>
			<Switch>
<<<<<<< HEAD
				<Route path="/instructor">
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
=======
				<Route path='/instructor'>
					<InstructorLanding />	
				</Route>
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
>>>>>>> 6599f0ec3b0a22bc05089b7a33a1614c4c7a2de9
};

export default Routes;
