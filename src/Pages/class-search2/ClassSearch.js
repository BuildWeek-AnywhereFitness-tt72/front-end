import React, { useState, useEffect } from 'react';
import * as Yup from "yup";
import styled from "styled-components";

import { allSessions } from "../../reusable-components/data";
import CheckBoxes from "./Checkboxes";

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
	const [searchResults] = useState(allSessions);
	const [filteredResults, setFilteredResults] = useState(allSessions);
	const [searchbar, setSearchbar] = useState(initSearch);
	const [errors, setErrors] = useState(initSearch);

	const filterGeneral = search => {
		const filtered = searchResults.filter(session => {
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
					// console.log("x", x);
					return x.toLowerCase().includes(search.toLowerCase());
				} else if (typeof x === "number") {
					// console.log("x", x);
					return x.toString().toLowerCase().includes(search.toLowerCase());
				} else {
					alert(x);
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

	const getActiveOptions = (filters) => {
		console.log(filters);
		const activeOptions = {};

		const typeReqs = [];
		for (const [k, v] in Object.entries(filters.type)) {
			if (v) {
				typeReqs.push(k);
			}
		};
		activeOptions.typeReqs = typeReqs;
		
		
		const durationReqs = [];
		// activeOptions.push(duration);
		for (const [k, v] in Object.entries(filters.duration)) {
			console.log(k, v)
			console.log(filters.duration);
			if (v) {
				if (k === "f_60_Plus") {
					durationReqs.push("60-+");
				} else {
					const kArr = k.split("_");
					durationReqs.push(`${kArr[1]}-${kArr[2]}`);
				}
			}
		};
		activeOptions.durationReqs = durationReqs;
		

		
			const timeReqs = [];
			// activeOptions.push(time);
			for (const [k, v] in Object.entries(filters.time)) {
				if (v) {
					switch (k) {
						case "earlyAM":
							timeReqs.push("5:00AM-9:00AM");
							break;
						case "lateAM":
							timeReqs.push("9:00AM-10:00AM")
							break;
						case "mid":
							timeReqs.push("10:00AM-12:00PM");
							break;
						case "earlyPM":
							timeReqs.push("12:00PM-2:00PM");
							break;
						case "latePM":
							timeReqs.push("2:00PM-4:00PM");
							break;
						case "earlyEv":
							timeReqs.push("4:00PM-7:00PM");
							break;
						default:
							timeReqs.push("7:00PM-10:00PM");
					}
				}
			}
			activeOptions.timeReqs = timeReqs;
		
		
			const intensityReqs = [];
			// activeOptions.push(intensity);
			for (const [k, v] in Object.entries(filters.intensity)) {
				if (v) {
					intensityReqs.push("k");
				}
			}
			activeOptions.intensityReqs = intensityReqs;
		
		return activeOptions;
	};

	async function filterCustom (filters) {
		// const options = await getActiveOptions(filters);
		// console.log(options);

		const filtered = filteredResults.filter(session => {
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
			const typeArr = Object.entries(filters.type).map(x => {
					if (x[1] === true) {
						return x[0]
					}
				}).filter(x => x!==undefined);
			const durationArr = Object.entries(filters.duration).map(x => {
				if (x[1]) {
					return x[0]
				}
			}).filter(x => x!==undefined);
			const timeArr = Object.entries(filters.time).map(x => {
				if (x[1]) {
					return x[0]
				}
			}).filter(x => x!==undefined);
			const intensity = Object.entries(filters.intensity).map(x => {
				if (x[1]) {
					return x[0]
				}
			}).filter(x => x!==undefined);
			console.log(typeArr);
			console.log(durationArr);
			
			// const durationMatched = durationArr.filter(x => {
			// 	return session.duration.splice(2) <= x[2] || session.duration >= x[1];
			// })
			
			// arrToCompare.filter(x => {
			// 	for (const [k1, v1] of Object.entries(filters)) {
			// 		for (const [k2, v2] of Object.entries(v1)) {
			// 			return (x.includes(k2) || x === k2);
			// 		}
			// 	}
			// })
			// const matched = arrToCompare.filter(x => {
			// 	for (const [k1,v1] of Object.entries(options)) {

			// 	}
			// });
			return durationMatched;
			// return (matched.length !== 0);
		});
		console.log(filtered);

	};


	// const handleCheck = (name, filterName, checked) => {
	// 	// console.log(evt.target);
	// 	// console.log(k1, k2, evt.target)
	// 	// const { name, checked, } = evt.target;
	// 	// const nameArr = name.split("-");
	// 	// console.log(nameArr, checked);
	// 	// console.log(filters);
		// setFilters(prevState => {
		// 	// console.log(prevState);
		// 	// console.log(nameArr[0], nameArr[1], checked);
		// 	// console.log(evt.target)
		// 	let copy = Object.assign({}, prevState[nameArr[0]]);
		// 	copy[nameArr[1]] = checked;
		// 	return copy;
		// })
	// 	// console.log(filters);
	// 	setFilters({ ...filters, [filterName]: {[name]: [checked]}});
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
	}, [searchbar.search])

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