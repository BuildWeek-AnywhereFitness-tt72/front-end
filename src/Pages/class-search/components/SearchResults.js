import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import ResultCard from "./ResultCard";


const StyledResults = styled.div`
	display: flex;
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	overflow-y: scroll;
	overflow-x: hidden;
	height: 95%;
	width: 60%;
	/* border: 20px solid green; */
`;

const SearchResults = props => {
	const { input, results } = props;
	if (results.length === 0) {
		return (
			<div>There are no search results for {input ? input : "UNKNOWN"}</div>
		);
	}
	return (
		<StyledResults>
			{
				results.map(result => {
					return (<ResultCard result={result} />);
				})
			}
		</StyledResults>
	);

};

export default SearchResults;