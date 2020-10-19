import React, { useState } from 'react';
// // import styled from "styled-components";


// classType: 
// classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp"]
// classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",]
// classDate: Calendar
// classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
// classLevel: ["beginner", "intermediate", "advanced"]





const SearchOptionsDropdown = props => {
	
	const { filters } = props;

	/**
	 * This helper function takes a filter name and maps every available option for the given filter
	 * into an array of <option> elements
	 * @param filterName the name of the filter type that will be mapped
	 * @return a new array of <option> elements for each option for the given filter type
	 */
	const mapFilter = (filterName) => {
		return filters[filterName].map(opt => {
			return <option key={opt} value={opt}>{opt}</option>
		});
	};

	return (
		<div className="options-container">
			{
				//Object.keys returns an array of each filterName in filters object
				Object.keys(filters).map(filter => {
					//for each filterName in state, return a select element
					return (
						<select key={filter} name={filter}> 
						{/* each select has a label option to begin */}
							<option key="label" value="">{filter}</option>
							{ mapFilter(filter) }
						</select>
					);
				})
			}
		</div>
	);
};

export default SearchOptionsDropdown;