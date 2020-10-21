import React from "react";
import styled from "styled-components";
// import {Link} from "react-router-dom";

import ResultCard from "./ResultCard";


const StyledResults = styled.div`
	display: ${pr => pr.displayParam};
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
	const { input, results, displayParam } = props;
	if (!results) {
		return (
			<div>There are no search results for {input ? input : "UNKNOWN"}</div>
		);
	}
	return (
		<StyledResults displayParam={displayParam}>
			{
				results.map(result => {
					return (<ResultCard key={result["sessionid"]} result={result} />);
				})
			}
		</StyledResults>
	);

};

export default SearchResults;