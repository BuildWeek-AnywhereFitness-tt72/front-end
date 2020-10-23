import React, { useState } from "react";
import styled from "styled-components";
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';

const BoxesContainer = styled.div`
	display: ${pr => pr.shown ? "flex" : "none"};
	flex-flow: row wrap;
	width: 100%;
	height: 200px;
`;

// const Checkbox = styled.div`
// 	width: 200px;
// 	height: 10px;
// `;

const CheckboxContainer = styled.div`
	display: ${pr => pr.shown ? "flex" : "none"};
	flex-flow: row wrap;
	width: 50rem;
	justify-content: center;
	align-items: center;
	input, label {
		font-size: 2rem;
		font-family: Raleway;
	}
`;

const OptionsContainer = styled.div`
	display: flex;
	flex-flow: row nowrap;
	/* justify-content: center; */
	align-items: center;
	height: 60px;
	a {
		display: block;
		width: 20rem;
		margin: 2rem;
		border-radius: 50px;
		border: 2px solid black;
		padding: 1rem;
		text-align: center;
		font-family: Raleway;
		text-align: center;
		font-size: 1.8rem;
		font-weight: 700;
	}
`;


const initFilters = {
	typeActive: false,
	durationActive: false,
	timeActive: false,
	intensityActive: false,
}
const useActiveFilters = () => {
	const [activeFilters, setActiveFilters] = useState(initFilters);

	const setActive = (name) => {
		setActiveFilters({ ...initFilters, [`${name}Active`]: !activeFilters[`${name}Active`] });
	}
	return [activeFilters, setActive];
};

const Checkboxes = props => {
	const [activeFilters, setActive] = useActiveFilters();
	const { filters } = props;

	const handleCheck = (evt) => {
		const { name, checked } = evt.target;

	};

	const createCheckboxes = () => {
		// const arrOfChecksArr = [];
		const arrChecks = [];
		// console.log(filters);
		for (const [k1, v1] of Object.entries(filters)) {
			for (const [k2, v2] of Object.entries(v1)) {
				// console.log(`k1:${k1}, v1:${v1}, k2:${k2}, v2:${v2}`)
				return (
					<label key={`${k1}-${k2}`} for={`${k1}-${k2}`}>
						<input name={`${k1}-${k2}`} type="checkbox" key={`typebox-${k2}`} checked={filters[k1][k2]} onChange={handleCheck} />
						{k2}
					</label>
				);
				// arrOfChecksArr.push(arrChecks);
			}
		}
		// console.log(arrChecks);
		return arrChecks;
	};

	const createContainer = (filterName, dependency) => {
		const checks = createCheckboxes().map(x => {
			if (x.key.includes(filterName)) {
				return x;
			}
		});
		return (
			<CheckboxContainer className={`boxes-container ${filterName}`} shown={dependency}>
				{ checks}
			</CheckboxContainer>
		);
	};


	return (
		<>
			<OptionsContainer>
				<a onClick={() => setActive("type")}>Class Type</a>
				<a onClick={() => setActive("duration")}>Class Duration</a>
				<a onClick={() => setActive("time")}>Class Time</a>
				<a onClick={() => setActive("intensity")}>Class Intensity</a>
				<DayPickerInput />
			</OptionsContainer>

			{
				Object.entries(filters).map(([k1, v1]) => {
					
					return (
						<CheckboxContainer shown={activeFilters.typeActive}>
							{
								Object.entries(v1).map(([k2,v2])=>{
									if (k2 === "type") {
										return (
											<label key={`${k1}-${k2}`} for={`${k1}-${k2}`}>
												<input name={`${k1}-${k2}`} type="checkbox" key={`typebox-${k2}`} checked={filters["type"][k2]} onChange={handleCheck} />
												{k2}
											</label>
										);
									} else {
										return null;
									}
								})
							}
						</CheckboxContainer>
					);
				})
			}
		</>
		);
};
export default Checkboxes;