import React, { useState } from 'react';
import styled from "styled-components";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const Dropdown = styled.select`
	display: inline-block;
	height: 5rem;
	width: 20rem;
	margin: 2rem;
	border-radius: 50px;
	text-align: center;
	font-family: Raleway;
	text-align: center;
	font-size: 1.8rem;
	font-weight: 700;
`;

// const StyledDayPicker = styled(DayPickerInput)`
// 	input#day-input {
// 		display: inline-block;
// 		height: 5rem;
// 		width: 20rem;
// 		margin: 2rem;
// 		border-radius: 50px;
// 		text-align: center;
// 		font-family: Raleway;
// 		text-align: center;
// 		font-size: 1.8rem;
// 		font-weight: 700;
// 	}
// `;

const validFilters = {
	type: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp",],
	duration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	time: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	intensity: ["beginner", "intermediate", "advanced"],
}



const SearchOptionsDropdown = props => {
	const { filtersChange, searchChange } = props;

	/**
	 * This helper function takes a filter name and maps every available option for the given filter
	 * into an array of <option> elements
	 * @param filterName the name of the filter type that will be mapped
	 * @return a new array of <option> elements for each option for the given filter type
	 */
	const mapFilter = (filterName) => {
		return validFilters[filterName].map(opt => {
			return <option key={opt} value={opt}>{opt}</option>
		});
	};

	const onChange = evt => {
		const { name, value } = evt.target;
		filtersChange(name, value);
	};

	return (
		<div className="options-container">
			{
				//Object.keys returns an array of each filterName in filters object
				Object.keys(validFilters).map(filter => {
					//for each filterName in state, return a select element
					return (
						<Dropdown key={filter} name={filter} onChange={onChange}>
							{/* each select has a label option to begin */}
							<option key="label" value="">{filter}</option>
							{ mapFilter(filter)}
						</Dropdown>
					);
				})
			}
			{/* <StyledDayPicker onDayChange={day => searchChange("dateInput", day)} value="" inputProps={{id: "day-input"}}/> */}
			<DayPickerInput onDayChange={day => searchChange("date", day)} value="" inputProps={{id: "day-input"}}/>
		</div>
	);
};

export default SearchOptionsDropdown;