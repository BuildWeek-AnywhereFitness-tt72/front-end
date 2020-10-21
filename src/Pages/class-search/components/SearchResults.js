import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import ResultCard from "./ResultCard";



const SearchResults = props => {
	const { input, results } = props;
	if (results.length === 0) {
		return (
			<div>There are no search results for {input ? input : "UNKNOWN"}</div>
		);
	}
	return (
		<div>
			{
				results.map(result => {
					return (<ResultCard result={result} />);
				})
			}
		</div>
	);

};

export default SearchResults;