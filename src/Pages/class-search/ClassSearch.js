// import React, { useState } from 'react';
import React, {useState} from 'react';
import { Route, Switch } from "react-router-dom";
import ClassSearchHead from "./ClassSearchHead";
import SearchLanding from "./components/SearchLanding";
import SearchResults from "./components/SearchResults";

const ClassSearch = props => {
	const [searchResults, setSearchResults] = useState({});
	const [searchTerm, setSearchTerm] = useState({});

	const executeSearch = (searchInput) => {
		setSearchTerm(searchInput);
		setSearchResults(searchInput);
	}
	return (
		<div className="class-search-container">
			<ClassSearchHead executeSearch={executeSearch} />
			<div>
				<Switch>
					<Route path="/classes/search/*">
						<SearchResults results={searchResults} searchTerm={searchTerm} />
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