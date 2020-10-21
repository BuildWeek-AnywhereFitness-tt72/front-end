import React, {useState} from "react";
import styled from "styled-components";
// import {Link} from "react-router-dom";

import ResultCard from "./ResultCard";
const StyledResults = styled.div`
	display: ${pr => pr.displayParam};
	flex-flow: column nowrap;
	justify-content: flex-start;
	align-items: center;
	/* overflow-x: hidden; */
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
				rgba(0, 0, 0, 0.2),
				rgba(0, 0, 0, 0)
			) center top,
			
			/* Shadow BOTTOM */
			radial-gradient(
				farthest-side at 50% 100%,
				rgba(0, 0, 0, 0.2),
				rgba(0, 0, 0, 0)
			) center bottom;

		background-repeat: no-repeat;
		background-size: 100% 80px, 100% 80px, 100% 20px, 100% 20px;
		background-attachment: local, local, scroll, scroll;
	}

`;

// const useScrollTop = () => {
// 	const [scrollTop, setScrollTop] = useState(0);
// 	const onScroll = event => setScrollTop(event.target.scrollTop);
// 	return [scrollTop, { onScroll }]; 
// }

// const useCurrentScroll = () => {
// 	const [currentScroll, setCurrentScroll] = useState(0);
// 	const onScroll = evt => setCurrentScroll(evt.target.scrollTop / evt.target.scrollHeight);
// 	return [currentScroll, {onScroll}];
// };

const SearchResults = props => {
	const { input, results, displayParam } = props;
	// const [scrollTop, scrollTopProps ] = useScrollTop();
	// const [currentScroll, scrollProps] = useCurrentScroll();

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

			{/* </div> */}
		</StyledResults>
	);

};

export default SearchResults;