import React from 'react';
import styled from "styled-components";


// classType: 
// classType: ["yoga", "weightlifting", "biking/spin", "functional-fitness", "boxing", "cardio", "stretch", "dance", "running", "bootcamp"]
// classDuration: ["0-15", "15-30", "30-45", "45-60", "60+",]
// classDate: Calendar
// classTime: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
// classLevel: ["beginner", "intermediate", "advanced"]


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
const StyledOption = styled.option`
`;


const SearchOptionsDropdown = props => {

	const { validFilters, filtersChange, } = props;

	/**
	 * This helper function takes a filter name and maps every available option for the given filter
	 * into an array of <option> elements
	 * @param filterName the name of the filter type that will be mapped
	 * @return a new array of <option> elements for each option for the given filter type
	 */
	const mapFilter = (filterName) => {
		return validFilters[filterName].map(opt => {
			return <StyledOption key={opt} value={opt}>{opt}</StyledOption>
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
							<StyledOption key="label" value="">{filter}</StyledOption>
							{ mapFilter(filter)}
						</Dropdown>
					);
				})
			}

		</div>
	);
};

export default SearchOptionsDropdown;