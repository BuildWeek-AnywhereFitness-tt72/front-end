import React, { useState, useEffect } from "react";
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
	type: {
		yoga: false,
		weightlifting: false,
		biking: false,
		functionalFitness: false,
		boxing: false,
		cardio: false,
		stretch: false,
		dance: false,
		running: false,
		bootcamp: false,
	},
	duration: {
		f_00_15: false,
		f_15_30: false,
		f_30_45: false,
		f_45_60: false,
		f_60_Plus: false,
	},
	time: {
		earlyAM: false,
		lateAM: false,
		mid: false,
		earlyPM: false,
		latePM: false,
		earlyEv: false,
		lateEv: false,
	},
	intensity: {
		beginner: false,
		intermediate: false,
		advanced: false,
	}
};

const initActiveFilters = {
	typeActive: false,
	durationActive: false,
	timeActive: false,
	intensityActive: false,
}

const useActiveFilters = () => {
	const [activeFilters, setActiveFilters] = useState(initActiveFilters);


	const setActive = (name) => {
		setActiveFilters({ ...initActiveFilters, [`${name}Active`]: !activeFilters[`${name}Active`] });
	}
	return [activeFilters, setActive];
};

const Checkboxes = props => {
	const [activeFilters, setActive] = useActiveFilters();
	const [filters, setFilters] = useState(initFilters);
	// const { filters, parentCheck } = props;
	const {filterCustom} = props;


	const handleCheck = (evt) => {
		const { name, checked } = evt.target;
		const nameArr = name.split("-");
		setFilters(prevState => {
			let copy = Object.assign({}, prevState);
			copy[nameArr[0]][nameArr[1]] = checked;
			return copy;
		})
	};

	useEffect( () => {
		filterCustom(filters);
	}, [filters, filterCustom])


	return (
		<>
			<OptionsContainer>
				<a onClick={() => setActive("type")}>Class Type</a>
				<a onClick={() => setActive("duration")}>Class Duration</a>
				<a onClick={() => setActive("time")}>Class Time</a>
				<a onClick={() => setActive("intensity")}>Class Intensity</a>
				<DayPickerInput />
			</OptionsContainer>
	
			<CheckboxContainer className="boxes-container type" shown={activeFilters.typeActive}>
				<input name="type-yoga" type="checkbox" filter="type" key="typeBox1" checked={filters.type.yoga} onChange={handleCheck} />
				<label for="type-yoga">yoga</label>
				<input name="type-weightlifting" type="checkbox" key="typeBox2" checked={filters.type.weightlifting} onChange={handleCheck} />
				<label for="type-weightlifting">weightlifting</label>
				<input name="type-functionalFitness" type="checkbox" key="typeBox3" checked={filters.type.functionalFitness} onChange={handleCheck} />
				<label for="type-functionalFitness">functional fitness</label>
				<input name="type-cardio" type="checkbox" key="typeBox4" checked={filters.type.cardio} onChange={handleCheck} />
				<label for="type-cardio">cardio</label>
				<input name="type-stretch" type="checkbox" key="typeBox5" checked={filters.type.stretch} onChange={handleCheck} />
				<label for="type-stretch">stretch</label>
				<input name="type-dance" type="checkbox" key="typeBox6" checked={filters.type.dance} onChange={handleCheck} />
				<label for="type-dance">dance</label>
				<input name="type-running" type="checkbox" key="typeBox7" checked={filters.type.running} onChange={handleCheck} />
				<label for="type-running">running</label>
				<input name="type-bootcamp" type="checkbox" key="typeBox8" checked={filters.type.bootcamp} onChange={handleCheck} />
				<label for="type-bootcamp">bootcamp</label>
				<input name="type-biking" type="checkbox" key="typeBox9" checked={filters.type.biking} onChange={handleCheck} />
				<label for="type-biking">biking</label>
				<input name="type-boxing" type="checkbox" key="typeBox10" checked={filters.type.boxing} onChange={handleCheck} />
				<label for="type-boxing">boxing</label>
			</CheckboxContainer>
			<CheckboxContainer className="boxes-container duration" shown={activeFilters.durationActive}>
				<input name="duration-f_00_15" type="checkbox" key="f_00_15" checked={filters.duration.f_00_15} onChange={handleCheck} />
				<label for="duration-f_00_15">0-15 min</label>
				<input name="duration-f_15_30" type="checkbox" key="f_15_30" checked={filters.duration.f_15_30} onChange={handleCheck} />
				<label for="duration-f_15_30">15-30 min</label>
				<input name="duration-f_30_45" type="checkbox" key="f_30_45" checked={filters.duration.f_30_45} onChange={handleCheck} />
				<label for="duration-f_30_45">30-45 min</label>
				<input name="duration-f_45_60" type="checkbox" key="f_45_60" checked={filters.duration.f_45_60} onChange={handleCheck} />
				<label for="duration-f_45_60">45-60 min</label>
				<input name="duration-f_60_Plus" type="checkbox" key="f_60_Plus" checked={filters.duration.f_60_Plus} onChange={handleCheck} />
				<label for="duration-f_60_Plus">60+ min</label>
			</CheckboxContainer>
			<CheckboxContainer className="boxes-container time" shown={activeFilters.timeActive}>
				<input name="time-earlyAM" type="checkbox" key="earlyAM" checked={filters.time.earlyAM} onChange={handleCheck} />
				<label for="time-earlyAM">Early Morning</label>
				<input name="time-lateAM" type="checkbox" key="lateAM" checked={filters.time.lateAM} onChange={handleCheck} />
				<label for="time-lateAM">Late Morning</label>
				<input name="time-mid" type="checkbox" key="mid" checked={filters.time.mid} onChange={handleCheck} />
				<label for="time-mid">Midday</label>
				<input name="time-earlyPM" type="checkbox" key="earlyPM" checked={filters.time.earlyPM} onChange={handleCheck} />
				<label for="time-earlyPM">Early Afternoon</label>
				<input name="time-latePM" type="checkbox" key="latePM" checked={filters.time.latePM} onChange={handleCheck} />
				<label for="time-latePM">Late Afternoon</label>
				<input name="time-earlyEv" type="checkbox" key="earlyEv" checked={filters.time.earlyEv} onChange={handleCheck} />
				<label for="time-earlyEv">Early Evening</label>
				<input name="time-lateEv" type="checkbox" key="lateEv" checked={filters.time.lateEv} onChange={handleCheck} />
				<label for="time-lateEv">Late Evening</label>
			</CheckboxContainer>
			<CheckboxContainer className="boxes-container intensity" shown={activeFilters.intensityActive}>
				<input name="intensity-beginner" type="checkbox" key="beginner" checked={filters.time.beginner} onChange={handleCheck} />
				<label for="intensity-beginner">Beginner</label>

				<input name="intensity-intermediate" type="checkbox" key="intermediate" checked={filters.time.intermediate} onChange={handleCheck} />
				<label for="intensity-intermediate">Intermediate</label>

				<input name="intensity-advanced" type="checkbox" key="advanced" checked={filters.time.advanced} onChange={handleCheck} />
				<label for="intensity-advanced">Advanced</label>
			</CheckboxContainer>

		</>
	);
};
export default Checkboxes;


		{/* 
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
			} */}