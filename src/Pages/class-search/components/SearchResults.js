// import React, {useState} from "react";
import React from "react";
import styled from "styled-components";

import ResultCard from "./ResultCard";
const StyledResults = styled.div`
	display: ${pr => pr.displayParam};
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	max-height: 95%;
	width: 60%;
	background-color: white;
	div.shadow-wrapper {
		max-height: 100%;
		overflow: auto;
		background:
			/* Shadow Cover TOP */
			linear-gradient(
				white 30%,
				rgba(255, 255, 255, 0)
			) center top,
			
			/* Shadow Cover BOTTOM */
			linear-gradient(
				rgba(255, 255, 255, 0), 
				white 70%
			) center bottom,
			
			/* Shadow TOP */
			radial-gradient(
				farthest-side at 50% 0,
				rgba(0, 0, 0, 0.3),
				rgba(0, 0, 0, 0)
			) center top,
			
			/* Shadow BOTTOM */
			radial-gradient(
				farthest-side at 50% 100%,
				rgba(0, 0, 0, 0.3),
				rgba(0, 0, 0, 0)
			) center bottom;

		background-repeat: no-repeat;
		background-size: 100% 100px, 100% 100px, 100% 20px, 100% 20px;
		background-attachment: local, local, scroll, scroll;
	}

`;


const SearchResults = props => {
	const { input, results, displayParam } = props;
	
	if (!results) {
		return (
			<div>There are no search results for {input ? input : "UNKNOWN"}</div>
		);
	}
	return (
		// <StyledResults displayParam={displayParam} {...scrollProps} currentScroll={currentScroll}>
		<StyledResults displayParam={displayParam}>
			<div className="shadow-wrapper">
				{results.map(result => {
						return (<ResultCard key={result["sessionid"]} result={result} />);
				})}
			</div>
		</StyledResults>
	);

};

export default SearchResults;