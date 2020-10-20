import React, { useState } from 'react';
import SearchHeader from "./components/SearchHeader";
import SearchOptionsDropdown from "./components/SearchOptionsDropdown";

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

const ClassSearchHead = props => {
	const [input, setInput] = useState(initInput);
	const [filters, setFilters] = useState(initFilters);
	const [isDisabled] = useState(false);

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
			<form onSubmit={searchSubmit}>
				<SearchHeader input={input} searchChange={searchChange} searchSubmit={searchSubmit} isDisabled={isDisabled} />
				<SearchOptionsDropdown filters={filters} validFilters={validFilters} filtersChange={filtersChange} />
			</form>
	);
};

export default ClassSearchHead;