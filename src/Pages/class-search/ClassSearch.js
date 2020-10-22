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
		]},
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
			]},
];

const exampleFilters = {
	"name": "Running",
	"type": "Running",
}


const ClassSearch = props => {
	const [searchResults, setSearchResults] = useState(allSessions);
	const [searchTerm, setSearchTerm] = useState("search");
	const [filteredResults, setFilteredResults] = useState([])
	const [resultsOpen, setResultsOpen] = useState(false);

	const executeSearch = (searchInput) => {
		// setSearchTerm(searchInput);
		// setSearchResults(searchInput);
		setResultsOpen(true);
	}
	// const filterSessions = (sessions, filter) => {
	// 	let results = [];
	// 	for (let prop in filter) {
	// 		if (filter.hasOwnProperty(prop)) {
	// 			for (let i=0; i< filter.length; i++) {
	// 				if (sessions[i][prop] === filter[prop]) {
	// 					results.push(sessions[i])
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return results;
	// };
	const filterSessions = (filter) => {
		let sessions = searchResults;
		const filt = searchResults.filter(ss => {
			for (let key in filter) {
				// console.log(key)
				if (key === "name" || key === "sessionInput") {
					// console.log('name!!');
					console.log(ss[key], filter[key]);
					const toReturn = ss[key].toLowerCase().includes(filter[key].toLowerCase());
					console.log(toReturn);
					return toReturn;
				} else if (Object.isObject(filter[key])) {
					console.log("OBJECT!", filter[key], key);
				}
				else if (ss[key] === undefined || ss[key] !== filter[key]) {
					return false;
				}
				return true;
			}
		});
		console.log(filt);
		setFilteredResults([...filteredResults, filt]);
	};
	// console.log("Ex", filterSessions(sessionsTest, exampleFilters));

	return (
		<div className="class-search-container" >
			<ClassSearchHead executeSearch={executeSearch} filterSessions={filterSessions}/>
			<StyledClassSearch>
				
				<SearchLanding displayParam={resultsOpen ? "none" : "block"} />
				<SearchResults results={searchResults} input={searchTerm} displayParam={resultsOpen ? "flex" : "none"  } />
				<StyledMap />
				
			</StyledClassSearch>
		</div>
	);
};

export default ClassSearch;