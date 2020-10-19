import React, { useState } from 'react';
// // import styled from "styled-components";


// classType: 
// classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp"]
// classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",]
// classDate: Calendar
// classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
// classLevel: ["beginner", "intermediate", "advanced"]


//valid types
const validFilters = {
	classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp", ],
	classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	// classDate: Calendar
	classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	classLevel: ["beginner", "intermediate", "advanced"],
}


const SearchOptionsDropdown = props => {
	const [filters, setFilters] = useState(validFilters);

	const mapFilter = (filterName) => {
		return filters[filterName].map(opt => {
			return <option key={opt} value={opt}>{opt}</option>
		});
	};

	return (
		<div className="options-container">
			{
				Object.keys(filters).map(filter => {
					return (
						<select key={filter} name={filter}>
							{ mapFilter(filter) }
						</select>
					);
				})
			}


		</div>
	);
};

export default SearchOptionsDropdown;