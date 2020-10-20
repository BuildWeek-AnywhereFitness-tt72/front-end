import React, { useState } from 'react';
import ClassSearchHead from "./ClassSearchHead";
import SearchLanding from "./components/SearchLanding";

const ClassSearch = props => {
	return (
		<div className="class-search-container">
			<ClassSearchHead />
			
			<div>
			<SearchLanding />
			</div>
		</div>
	);
};

export default ClassSearch;