// import React, { useState } from 'react';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import ClassSearchHead from "./ClassSearchHead";
import SearchLanding from "./components/SearchLanding";
import SearchResults from "./components/SearchResults";

const ClassSearch = props => {
	return (
		<div className="class-search-container">
			<ClassSearchHead />
			<div>
				<Switch>
					<Route path="/classes/search/*">
						<SearchResults />
					</Route>
					<Route exact path="/classes/search">
						<SearchLanding />
					</Route>
				</Switch>
			</div>
		</div>
	);
};

export default ClassSearch;