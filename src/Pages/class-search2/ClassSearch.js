import React, { useState, useEffect, useCallback } from 'react';
import * as Yup from "yup";
import styled from "styled-components";

import { allSessions } from "../../reusable-components/data";
import CheckBoxes from "./Checkboxes";
import { axiosWithAuth } from "../../utils/axioswauth";

import SearchResults from "./SearchResults";

const searchFormSchema = Yup.object().shape({
	search: Yup.string().required(),
	location: Yup.string()
});

const initSearch = {
	search: "",
	location: "",
};

const StyledClassSearch = styled.div`
	margin-top: 10px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 81.1vh;
		background-color: ${pr => pr.theme.eggshell};
`;

const StyledSearchHeader = styled.header`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	border: 1px solid lightgray;
	align-items: center;
	div {
		display: inline-flex;
		flex-flow: row nowrap;
		align-items: center;
		h1 {
			display: inline-block;
			font-size: 6rem;
			color: ${pr => pr.theme.charcoal};
			/* margin-right: 3rem; */
		}
		p {
			display: inline-block;
			font-weight: 800;
			font-size: 2rem;
			font-style: normal;
			letter-spacing: 0.05rem;
			padding: 10px;
			color: ${pr => pr.theme.charcoal};
		}
	}
`;

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

const InputContainer = styled.div`
	display: inline-block;
	height: 5rem;
	width: 60rem;
`;

const Input = styled.input.attrs(pr => ({
	radius: pr.place === "left" ? "25px 0px 0px 25px" : "0px 25px 25px 0px",
}))`
	background: transparent;
	display: inline-block;
	text-align: center;
	height: 100%;
	width: 50%;
	border-radius: ${pr => pr.radius};
	border-left: ${pr => pr.place === "right" ? "0px" : ""};
	border-color: #CCCCCC;
	outline: none;
`;


const ClassSearch = props => {
	// this will use an axios call if back-end gets connected
	const [searchResults, setSearchResults] = useState(allSessions);
	const [filteredResults, setFilteredResults] = useState(allSessions);
	const [searchbar, setSearchbar] = useState(initSearch);
	const [errors, setErrors] = useState(initSearch);

	const filterGeneral =
		(search) => {
			// const search = searchbar.search;
			// if (!searchResults) {
			// 	setFilteredResults(allSessions);
			// 	return;
			// }
			console.log(searchResults)
			const filtered = searchResults.filter(session => {
				// const arrToCompare = [];
				// if (session.location) {
				// 	arrToCompare.push(session.locations.address)
				// 	arrToCompare.push(session.locations.city)
				// 	arrToCompare.push()
				// }
				const arrToCompare = [
					session.duration,
					session.name,
					session.time,
					session.type,
					session.locations ? session.locations.address : undefined,
					session.locations ? session.locations.state : undefined,
					session.locations ? session.locations.city : undefined,
					session.intensity,
				];
				const matched = arrToCompare.filter(x => {
					if (typeof x === "string") {
						// console.log("x", x);
						return x.toLowerCase().includes(search.toLowerCase());
					} else if (typeof x === "number") {
						// console.log("x", x);
						return x.toString().toLowerCase().includes(search.toLowerCase());
					} else if (x === undefined) {
						// alert(x);
						console.log("x", x);
						return false;
					}
				})
				// console.log("matched", matched);
				return matched.length !== 0;
			});
			setFilteredResults(filtered);
			return filteredResults;
		};

	const filterCustom = (specs) => {
		// console.log(specs);
		const { typesArr, durationRange, intensityArr, timeOptions } = specs;
		// console.log(searchResults);
		const filtered = searchResults.filter(session => {
			console.log(session);
			const sessionDuration = session.duration ? Number(session.duration.split(" ")[0]) : undefined;
			const sessionIntensity = session.intensity;
			// const sessionLocation = session.locations;
			// const sessionName = session.name;
			// .split(":")[0]
			const sessionTime = session.time ? Number(session.time.split(":")[1]) : undefined;
			// const sessionDate = session.time.split(" ")[0];
			const sessionType = session.type ? session.type : undefined;
			console.log(`sDuration: ${sessionDuration}`)
			console.log(`sIntensity: ${sessionIntensity}`)
			console.log(`sTime: ${sessionTime}`)
			console.log(`sType: ${sessionType}`)

			const matches = {
				durationMatch: false,
				typeMatches: false,
				timeMatch: false,
				intensityMatches: false,
			}

			if (sessionDuration) {
				matches.durationMatch = (sessionDuration <= durationRange[1]) && (sessionDuration >= durationRange[0]);
			}
			if (sessionType) {
				const tMatches = typesArr.filter(type => {
					return sessionType.toLowerCase().includes(type.toLowerCase()) || sessionType.toLowerCase() === type.toLowerCase();
				});
				matches.typeMatches = tMatches.length > 0;
			}
			if (sessionIntensity) {
				const sMatches = intensityArr.filter(intensity => {
					return sessionIntensity.includes(intensity);
				});
				matches.intensityMatches = sMatches.length > 0;
			}
			if (sessionTime) {
				const iMatches = timeOptions.filter(arr => {
					// const splitTime = opt.split("-");
					return (sessionTime >= Number(arr[0]) && (sessionTime <= Number(arr[1])))
				});
				matches.sessionTimeMatches = iMatches.length > 0;
			}
			// const durationMatch = (sessionDuration) &&  (sessionDuration <= durationRange[1]) && (sessionDuration >= durationRange[0]);
		// }

			// const typeMatches =sessionType && typesArr.filter(type => {
			// 	return sessionType.toLowerCase().includes(type.toLowerCase()) || sessionType.toLowerCase() === type.toLowerCase();
			// });
			// const intensityMatches = sessionIntensity &&  intensityArr.filter(intensity => {
			// 	return sessionIntensity.includes(intensity);
			// });
			// const timeMatch = sessionTime && timeOptions.filter(arr => {
			// 	// const splitTime = opt.split("-");
			// 	return (sessionTime >= Number(arr[0]) && (sessionTime <= Number(arr[1])))
			return matches.durationMatch
		|| matches.typeMatches
		|| matches.intensityMatches
		|| matches.timeMatches	
		});


	// return durationMatch
	// 	|| typeMatches.length > 0
	// 	|| intensityMatches.length > 0
	// 	|| timeMatch.length > 0;
	console.log(filtered);
	setFilteredResults(filtered);
};
	// };

const onSearchChange = (evt) => {
	const { name, value } = evt.target;
	Yup.reach(searchFormSchema, name)
		.validate(value)
		.then(() => {
			setErrors({ ...errors, [name]: "" });
		})
		.catch(err => {
			setErrors({ ...errors, [name]: value });
		});
	setSearchbar({ ...searchbar, [name]: value })
};

useEffect(() => {
	filterGeneral(searchbar.search);
}, [searchbar])

useEffect(() => {
	axiosWithAuth().get("/sessions/sessions")
		.then(res => {
			setSearchResults(res.data);
			console.log(res.data)
			console.log(res.data.sessions);
		})
		.catch(err => {
			console.log(err);
		})

}, []);
// filterGeneral(searchbar.search);

// useEffect(() => {
// 	filterCustom()
// }, [])

// useEffect(() => {
// 	filterCustom();
// }, [filters]);

return (
	<div className="class-search-container">
		<form>
			<StyledSearchHeader>
				<div><h1>Anywhere Fitness</h1></div>
				<InputContainer>
					<Input name="search" type="text" value={searchbar.search} onChange={onSearchChange} placeholder="Find a class or activity" place="left" />
					<Input name="location" type="text" value={searchbar.location} onChange={onSearchChange} placeholder="City, ST" place="right" />
				</InputContainer>
				<div><p>About</p><p>Hello User</p></div>
			</StyledSearchHeader>
			<CheckBoxes filterCustom={filterCustom} />
		</form>
		<StyledClassSearch>
			<SearchResults results={filteredResults} input={searchbar.search} displayParam={"flex"} />
			<StyledMap />
		</StyledClassSearch>
	</div>
);
};


export default ClassSearch;