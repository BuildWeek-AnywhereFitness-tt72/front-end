import React, { useState } from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import styled from "styled-components";

// const Dropdown = styled.div`
// 	display: inline-flex;
// 	justify-content: center;
// 	align-items: center;
// 	height: 5rem;
// 	width: 20rem;
// 	margin: 2rem;
// 	border-radius: 50px;
// 	border-color: 1px solid black;
// 	text-align: center;
// 	font-family: Raleway;
// 	text-align: center;
// 	font-size: 1.8rem;
// 	font-weight: 700;
// `;

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
	type: ["yoga", 
	"weightlifting", 
	"biking/spin", 
	"functional-fitness", 
	"boxing", 
	"cardio", 
	"stretch", 
	"dance", 
	"running", 
	"bootcamp",],
	duration: ["0-15", "15-30", "30-45", "45-60", "60+",],
	time: ["early-morning", "late-morning", "midday", "early-afternoon", "late-afternoon", "early-evening", "late-evening",],
	intensity: ["beginner", "intermediate", "advanced"],
}

// const BoxesContainer = styled.div`
// 	display: ${pr => pr.shown ? "flex" : "none"};
// 	flex-flow: row wrap;
// 	width: 100%;
// 	height: 200px;
// `;

const initIsOpen = {
	type: false,
	duration: false,
	time: false,
	intensity: false,
}

const Options = styled.div`
	display: flex;
	flex-flow: row nowrap;
	/* justify-content: center; */
	align-items: center;
`;

// const Checkbox = styled.div`
// 	width: 200px;
// 	height: 10px;
// `;

const SearchOptionsDropdown = props => {
	const { filtersChange, searchChange, input } = props;
	const [isOpen, setIsOpen] = useState(initIsOpen);
	// const [durationOpen, setDurationOpen] = useState(false);
	// const [timeOpen, setTimeOpen] = useState(false);
	// const [intensityOpen, setIntensityOpen] = useState(false);

	/**
	 * This helper function takes a filter name and maps every available option for the given filter
	 * into an array of <option> elements
	 * @param filterName the name of the filter type that will be mapped
	 * @return a new array of <option> elements for each option for the given filter type
	 */
	const mapFilter = (filterName) => {
		// console.log(filterName);
		return validFilters[filterName].map(opt => {
			// return <option key={opt} value={opt}>{opt}</option>
			return (
				<Checkbox>
				<input type="checkbox" key={opt} name={opt} checked={input[filterName][opt]} onChange={handleCheck} />
				<label for={opt}>{opt}</label>
				</Checkbox>
			);
		});
	};

	const handleCheck = evt => {
		// evt.preventDefault();
		evt.stopPropagation();
		const {name, checked} = evt.target;
		// console.log(input);
		console.log(name, checked);
		filtersChange(name, checked);
	};
	
	const toggleDrop = (name) => {
		// const { name, value } = evt.target;
		// setIsOpen({... isOpen, })
		// if (isOpen)
		setIsOpen(initIsOpen)
		setIsOpen({...isOpen, [name]: !isOpen[name] });
	};

	return (
		<Options className="options-container">
			{
				//Object.keys returns an array of each filterName in filters object
				Object.keys(validFilters).map(filter => {
					// console.log(filter);
					//for each filterName in state, return a select element
					return (
						<>
						<div key={filter} name={filter} onClick={() => toggleDrop(filter)}>
							<h2>{filter}</h2>
						</div>
						<div shown={isOpen[filter]}>
							{/* <BoxesContainer className="hide" shown={isOpen}> */}
								{/* each select has a label option to begin */}
								{/* <option key="label" value="">{filter}</option> */}
								{ mapFilter(filter)}
							{/* </BoxesContainer> */}
						</div>
						</>
					);
				})
			}
			{/* <StyledDayPicker onDayChange={day => searchChange("dateInput", day)} value="" inputProps={{id: "day-input"}}/> */}
			<DayPickerInput onDayChange={day => searchChange("date", day)} value="" inputProps={{id: "day-input"}}/>
		</Options>
	);
};

export default SearchOptionsDropdown;