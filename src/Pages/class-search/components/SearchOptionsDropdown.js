import React, { useState } from 'react';
import styled from "styled-components";
// import { CalendarDropdown } from "./CalendarDropdown";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
// const StyledOption = styled.option`
// `;

const CustomInput = styled.input`
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

// const StyledDatePicker = styled(DatePicker)`
// 	div.react-datepicker-wrapper {
// 		display: inline-block;
// 	height: 5rem;
// 	width: 20rem;
// 	margin: 2rem;
// 	border-radius: 50px;
// 	text-align: center;
// 	font-family: Raleway;
// 	text-align: center;
// 	font-size: 1.8rem;
// 	font-weight: 700;
// 	div.react-datepicker__input-container{
// 		input {
// 			display: inline-block;
// 			height: 5rem;
// 			width: 20rem;
// 			margin: 2rem;
// 			border-radius: 50px;
// 			text-align: center;
// 			font-family: Raleway;
// 			text-align: center;
// 			font-size: 1.8rem;
// 			font-weight: 700;
// 		}
// 	}
// 	}
// `;

const CalendarContainer = styled.div`
	div#prompt-container {
		background-color: #f0f0f0;
		text-align: center;
	}
	div#children-container {
		display: flex;
		width: 200px;
		button {
			color: ${pr => pr.theme.charcoal};
		}
		div.react-datepicker__month-container {
			display: flex;
			flex-flow: column nowrap;
			width: 100%;
			font-size: 1rem;
			div.react-datepicker__current-month {
				font-size: 2rem;
			}
			div.react-datepicker__day-names {
				display: flex;
				flex-flow: row nowrap;
				justify-content: space-evenly;
				font-size: 1.2rem;
				div.react-datepicker__month {
					width: 100%;
					display: flex;
					flex-flow: row nowrap;
					justify-content: space-evenly;
					font-size: 1.2rem;
					div.react-datepicker__week {
						width: 100%;
						display: flex;
						flex-flow: row nowrap;
						justify-content: space-evenly;
						font-size: 1.2rem !important;
						/* div.react-datepicker__day {
							&.react-datepicker__day-name, &.react-datepicker__day--, &.react-datepicker__time-name {
							/* width: (100 / 7)% !important; */
							display: inline-block;
							flex-flow: row nowrap;
							justify-content: space-evenly;
							font-size: 1.5rem !important;
							}
						} */
						div[class*="react-datepicker__day"][class*="react-datepicker__day--"] {
							display: inline-block;
							flex-flow: row nowrap;
							justify-content: space-evenly;
							font-size: 1.5rem !important;
						}
					}
				}
			}
		}
	}
`;

const MyContainer = ({ className, children }) => {
	return (

		<CalendarContainer className={className}>
			<div id="prompt-container" className="prompt-container">
				What is your favorite day?
			</div>
			<div id="children-container" className="children-container">{children}</div>
		</CalendarContainer>
	);
}

const StyledDay = styled.div`
	/* display: inline-block; */
	/* width: 14 !important; */
	/* font-size: 1.2rem !important; */
	/* opacity: 5%; */
`;




const SearchOptionsDropdown = props => {
	const [startDate, setStartDate] = useState(new Date());
	const { validFilters, filtersChange, } = props;

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

	// const renderDayContents = (day, date) => {
	// 	return (<StyledDay></StyledDay>);
	// };

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

			<DatePicker
				selected={startDate}
				onChange={date => setStartDate(date)}
				minDate={Date.now()}
				placeholderText={startDate}
				customInput={<CustomInput />}
				calendarContainer={MyContainer}
				// renderDayContents={renderDayContents}
				popperClassName="calendar-popper"
				popperPlacement="bottom-center"
				popperModifiers={{
					popperComponent: {
						width: "200px",
					},
					preventOverflow: {
						enabled: true,
						boundariesElement: "viewport"
					}
				}}
			/>


		</div>
	);
};

export default SearchOptionsDropdown;