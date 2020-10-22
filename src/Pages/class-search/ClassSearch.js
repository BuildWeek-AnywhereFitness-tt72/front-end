import React, { useState } from 'react';
// import { Route, Switch } from "react-router-dom";
// import axios from 'axios';
import styled from "styled-components";
import { allSessions } from "../../reusable-components/data";

import ClassSearchHead from "./ClassSearchHead2";
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


const sessionsTest = [
	{
		"sessionid": 9,
		"name": "Boxing in an abandoned ring with Chris",
		"type": "Boxing",
		"time": "2019-12-21 16:00:00",
		"duration": "64 minutes",
		"intensity": "Beginning",
		"maxsize": 47,
		"locations": {
			"locationid": 10,
			"address": "Williamson Lakes 8599",
			"city": "West Yahairaburgh",
			"state": "Nebraska",
			"zip": "22963"
		},
		"users": [
			{
				"user": {
					"userid": 11,
					"username": "burt.mckenzie",
					"roles": [
						{
							"role": {
								"roleid": 2,
								"name": "USER"
							}
						}
					]
				},
				"instructor": true
			},
			{
				"user": {
					"userid": 47,
					"username": "shanika.torphy",
					"roles": [
						{
							"role": {
								"roleid": 2,
								"name": "USER"
							}
						}
					]
				},
				"instructor": false
			}
		]
	},
	{
		"sessionid": 10,
		"name": "Running in the rain",
		"type": "Running",
		"time": "2020-10-22 16:00:00",
		"duration": "64 minutes",
		"intensity": "Beginning",
		"maxsize": 47,
		"locations": {
			"locationid": 10,
			"address": "Williamson Lakes 8599",
			"city": "West Yahairaburgh",
			"state": "Nebraska",
			"zip": "22963"
		},
		"users": [
			{
				"user": {
					"userid": 11,
					"username": "burt.mckenzie",
					"roles": [
						{
							"role": {
								"roleid": 2,
								"name": "USER"
							}
						}
					]
				},
				"instructor": true
			},
			{
				"user": {
					"userid": 47,
					"username": "shanika.torphy",
					"roles": [
						{
							"role": {
								"roleid": 2,
								"name": "USER"
							}
						}
					]
				},
				"instructor": false
			}
		]
	},
];

const exampleFilters = {
	"name": "Running",
	"type": "Running",
}


const ClassSearch = props => {
	const [searchResults, setSearchResults] = useState(allSessions);
	const [filteredResults, setFilteredResults] = useState(allSessions);
	// const [searchTerm, setSearchTerm] = useState("search");
	const [resultsOpen, setResultsOpen] = useState(true);

	const executeSearch = (searchInput) => {
		// setSearchTerm(searchInput);
		// setSearchResults(searchInput);
		setResultsOpen(true);
	}

	const filterSessionsGeneral= input => {
		console.log(`input.name — ${input.name}`);
		
		
		const filtered = searchResults.filter(session => {
			console.log(session);
			const arrToCompare = [
				session.duration,
				session.intensity,
				session.locations.address,
				session.locations.city,
				session.locations.state,
				session.name,
				session.time,
				session.type,
			];
			const matched = arrToCompare.filter(x => {
				if (typeof x === "string") {
					console.log("x", x);
					return x.toLowerCase().includes(input.name.toLowerCase());
				} else if (typeof x === "number") {
					console.log("x", x);
					return x.toString().toLowerCase().includes(input.name.toLowerCase());
				} else {
					console.log("x", x);
				}
			})
			console.log("matched", matched);
			return matched.length !== 0 ;
		});
		console.log(filtered);
		setFilteredResults(filtered);
	};

	return (
		<div className="class-search-container" >
			<ClassSearchHead executeSearch={executeSearch} filterSessions={filterSessionsGeneral} />
			<StyledClassSearch>
				<SearchLanding displayParam={resultsOpen ? "none" : "block"} />
				<SearchResults results={filteredResults} input={input.name} displayParam={resultsOpen ? "flex" : "none"} />
				<StyledMap />
			</StyledClassSearch>
		</div>
	);
};

export default ClassSearch;