import React, { useState, useEffect } from 'react';
// import { Link } from "react-router-dom";
import styled from "styled-components";

import SearchHeader from "./components/SearchHeader";
import SearchOptionsDropdown from "./components/SearchOptionsDropdown";
import searchFormSchema from './validation/searchFormSchema';



const initInput = {
	sessionInput: "",
	locationInput: "",
};

//valid types
const validFilters = {
	classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp",],
	classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	// classDate: Calendar
	classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	classLevel: ["beginner", "intermediate", "advanced"],
}

const initFilters = {
	classType: "",
	classDuration: "",
	classTime: "",
	classLevel: "",
};



const Button = styled.a`
	display: flex;
	background-color: ${pr => pr.theme.primaryOrange};
	color: ${pr => pr.theme.charcoal};
	width: 20rem;
	height: 5rem;
	flex-flow: row nowrap;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
	font-weight: 600;
	border-radius: 10px;
	margin: 0 auto;
	&:hover {
		color: ${pr => pr.theme.charcoal};
	}
`;



const ClassSearch = props => {
	const [input, setInput] = useState(initInput);
	const [filters, setFilters] = useState(initFilters);
	const [isDisabled, setIsDisabled] = useState(false);

	const searchChange = (name, value) => {
		setInput({ ...input, [name]: value });
	};

	const filtersChange = (name, value) => {
		setFilters({ ...filters, [name]: value });
	};

	const searchSubmit = (evt) => {
		evt.preventDefault();
		const newSearch = {
			session: input.sessionInput,
			location: input.locationInput,
			filters: filters,
		};
		console.log(newSearch);
		console.log(`Session: ${input.sessionInput}`, `Location: ${input.locationInput}`, filters);
	}

	return (
		<div className="class-search-container">
			<form onSubmit={searchSubmit}>
				<SearchHeader input={input} searchChange={searchChange} searchSubmit={searchSubmit} />
				<SearchOptionsDropdown filters={filters} validFilters={validFilters} filtersChange={filtersChange} />
			</form>
			<Button className="submit-btn" isDisabled={isDisabled}>Search</Button>
		</div>
	);
};

export default ClassSearch;