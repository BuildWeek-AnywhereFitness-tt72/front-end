import React from 'react';
// import { Link } from "react-router-dom";
// import styled from "styled-components";

import SearchHeader from "./components/SearchHeader";
import SearchOptionsDropdown from "./components/SearchOptionsDropdown";

const ClassSearch = props => {
	return (
		<div className="class-search-container">
			<SearchHeader />
			<SearchOptionsDropdown />
		</div>
	);
};

export default ClassSearch;