import React, {useState, useEffect} from 'react';
// import { Link } from "react-router-dom";
// import styled from "styled-components";

import SearchHeader from "./components/SearchHeader";
import SearchOptionsDropdown from "./components/SearchOptionsDropdown";

const initInput = {
	sessionInput: "",
	locationInput: "",
};

//valid types
const validFilters = {
	classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp", ],
	classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	// classDate: Calendar
	classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	classLevel: ["beginner", "intermediate", "advanced"],
}

const ClassSearch = props => {
	const [input, setInput] = useState(initInput);
	const [filters] = useState(validFilters);

	const searchChange = (name, value) => {
		
		setInput({ ...input, [name]: value });
	};


	const searchSubmit = () => {
		alert(`Session: ${input.sessionInput} | Location: ${input.locationInput}`);
	}
	
	return (
		<div className="class-search-container">
			<SearchHeader input={input} searchChange={searchChange} searchSubmit={searchSubmit} />
			<SearchOptionsDropdown filters={filters} />
		</div>
	);
};

export default ClassSearch;