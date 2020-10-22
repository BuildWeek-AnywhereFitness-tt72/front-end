import React, { useState } from 'react';
// import { Route, Switch } from "react-router-dom";
// import axios from 'axios';
import styled from "styled-components";
import { allSessions } from "../../reusable-components/data";

import ClassSearchHead from "./ClassSearchHead";
import SearchLanding from "./components/SearchLanding";
import SearchResults from "./components/SearchResults";


const StyledMap = styled.div`
	display: inline-block;
	width: 38%;
	background-image: url("https://s3-alpha-sig.figma.com/img/fbd8/6e44/0960ae4e0d226420c2a979f6b5f42e32?Expires=1604275200&Signature=YCPHs0XJ5npKgFthqu0YxyHAwq5Jr1JnJByIokoggAWAIO58whmVu-WadtoZJzepHiE2pIAzZ8CyfAh-y8-e52gxTZhPh0PFQTDpxrP2Zp1ubVzVbssuCt6Ccn88RYWBAt3-mYOweWXmjL09FCtwGZCDmAhUUsy2mTzuA7Uao29BTA9HVte9wKF~Psnxg1vXgoksIoQJxPqYckDHcZaqRYoAwdpv4xbS9vKEHbrIPih6uh8H660fFrpABnzXzCRzuPiwrWifHStHQVNM95PA6YrIY0qV~9wxBTr0-HciPpgxjo3HlnfvvR~TkH2aRyuflOptPIvYYmDzpeolO4UTng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	height: 100%;
	overflow: hidden;
`;

const StyledClassSearch = styled.div`
	margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 81.1vh;
		background-color: ${pr => pr.theme.eggshell};
`;

const ClassSearch = props => {
	const [searchResults, setSearchResults] = useState(allSessions);
	const [searchTerm, setSearchTerm] = useState("search");
	const [resultsOpen, setResultsOpen] = useState(false);

	const executeSearch = (searchInput) => {
		// setSearchTerm(searchInput);
		// setSearchResults(searchInput);
		setResultsOpen(true);
	}

	return (
		<div className="class-search-container" >
			<ClassSearchHead executeSearch={executeSearch} />
			<StyledClassSearch>
				
				<SearchLanding displayParam={resultsOpen ? "none" : "block"} />
				<SearchResults results={searchResults} input={searchTerm} displayParam={resultsOpen ? "flex" : "none"  } />
				<StyledMap />
				
			</StyledClassSearch>
		</div>
	);
};

export default ClassSearch;