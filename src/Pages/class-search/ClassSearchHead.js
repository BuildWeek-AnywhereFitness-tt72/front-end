import React, { useState, useEffect } from 'react';
import * as Yup from "yup";

import SearchHeader from "./components/SearchHeader";
import SearchOptionsDropdown from "./components/SearchOptionsDropdown";
// import searchFormSchema from "./validation/searchFormSchema";

const searchFormSchema = Yup.object().shape({
	name: Yup.string().required(),
	locationInput: Yup.string().required(),
	dateInput: Yup.string(),
});

const initInput = {
	sessionInput: "",
	locationInput: "",
	dateInput: "",
};

//valid types
const validFilters = {
	classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp",],
	classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	classLevel: ["beginner", "intermediate", "advanced"],
}

const initFilters = {
	classType: "",
	classDuration: "",
	classTime: "",
	classLevel: "",
};

const initSInput = {
	name: "",
	type: {
		yoga: false,
		bootcamp: false,
		weightlifting: false,
		bikingSpin: false,
		functionalFitness: false,
		boxing: false,
		cardio: false,
		stretch: false,
		dance: false,
		running: false,
	},
	time: {
		date: "", 
		time: "", 
	},
	intensity: {
		beginner: false,
		intermediate: false,
		advanced: false,
	},
	duration: "",
	locations: {
		address: "",
		city: "",
		state: "",
		zip: "",
	},

}

const ClassSearchHead = props => {
	const { executeSearch, user } = props;
	const [inputs, setInputs] = useState(initSInput);
	const [input, setInput] = useState(initInput);
	const [errors, setErrors] = useState(initInput);
	const [filters, setFilters] = useState(initFilters);
	const [isDisabled, setIsDisabled] = useState(true);
	const [filterResults, setFilterResults] = useState([]);

	const searchChange = (name, value) => {
		Yup.reach(searchFormSchema, name)
			.validate(value)
			.then(() => {
				setErrors({ ...errors, [name]: "" });
			})
			.catch(err => {
				setErrors({ ...errors, [name]: err.errors[0] });
			});
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
			date: input.date,
			filters: filters,
		};
		console.log(newSearch);
		console.log(`Session: ${input.sessionInput}`,
			`Location: ${input.locationInput}`,
			`Date: ${input.dateInput}`,
			filters
		);
		executeSearch();
	}

	useEffect(() => {
		searchFormSchema.isValid(input).then(valid => {
			setIsDisabled(!valid);
		})
	}, [input]);



	return (
		<form onSubmit={searchSubmit}>
			<SearchHeader input={input} searchChange={searchChange} searchSubmit={searchSubmit} isDisabled={isDisabled} user={user} />
			<SearchOptionsDropdown filters={filters} validFilters={validFilters} filtersChange={filtersChange} searchChange={searchChange} />
		</form>
	);
};

export default ClassSearchHead;