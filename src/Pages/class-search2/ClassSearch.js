import React, { useState, useEffect } from 'react';
import * as Yup from "yup";
import styled from "styled-components";

import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import { allSessions } from "../../reusable-components/data";

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

const initType = {
	yoga: false,
	weightlifting: false,
	biking: false,
	functionalFitness: false,
	boxing: false,
	cardio: false,
	stretch: false,
	dance: false,
	running: false,
	bootcamp: false,
};

const initDuration = {
	f0015: false,
	f1530: false,
	f3045: false,
	f4560: false,
	f60Plus: false,
}

const initTime = {
	earlyAM: false,
	lateAM: false,
	mid: false,
	earlyPM: false,
	latePM: false,
	earlyEv: false,
	lateEv: false,
}

const initIntensity = {
	beginner: false,
	intermediate: false, 
	advanced: false,
}

const ClassSearch = props => {
	// this will use an axios call if back-end gets connected
	const [searchResults] = useState(allSessions);
	const [filteredResults, setFilteredResults] = useState(allSessions);
	const [searchbar, setSearchbar] = useState(initSearch);
	const [errors, setErrors] = useState(initSearch);
	const [resultsOpen, setResultsOpen] = useState(true);
	
	const [filtersActive, setFiltersActive] = useState(false);
	const [typeActive, setTypeActive] = useState(false);
	const [durationActive, setDurationActive] = useState(false);
	const [timeActive, setTimeActive] = useState(false);
	const [intensityActive, setIntensityActive] = useState(false);

	const [type, setType] = useState(initType);
	const [duration, setDuration] = useState(initDuration);
	const [time, setTime] = useState(initTime);
	const [intensity, setIntensity] = useState(initIntensity);

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
				}
			})
			// console.log("matched", matched);
			return matched.length !== 0 ;
		});
		setFilteredResults(filtered);
	};

	const getActiveOptions = () => {
		const activeOptions = [];
		if (typeActive) {
			activeOptions.push(type);
		}
		if (durationActive) {
			activeOptions.push(duration);
		}
		if (timeActive) {
			activeOptions.push(time);
		}
		if (intensityActive) {
			activeOptions.push(intensity);
		}

	};

	const filterCustom = (options, search) => {

	};

	const onSearchChange = (evt) => {
		const {name, value} = evt.target;
		Yup.reach(searchFormSchema, name)
			.validate(value)
			.then(() => {
				setErrors({ ...errors, [name]: ""});
			})
			.catch(err => {
				setErrors({ ...errors, [name]: value });
			});
		setSearchbar({...searchbar, [name]: value})
	};

	useEffect( () => {
		filterGeneral(searchbar.search);
	}, [searchbar]);

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

			</form>
			<StyledClassSearch>
				<SearchResults results={filteredResults} input={searchbar.search} displayParam={"flex"} />
			</StyledClassSearch>
		</div>
	);
};

export default ClassSearch;