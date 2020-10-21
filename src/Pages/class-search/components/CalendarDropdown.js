import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";

// const InputContainer = styled.div`
// 	display: inline-block;
// 	height: 5rem;
// 	width: 60rem;
// `;

// const Input = styled.input.attrs(pr => ({
// 	radius: pr.place === "left" ? "25px 0px 0px 25px" : "0px 25px 25px 0px",
// }))`
// 	background: transparent;
// 	display: inline-block;
// 	text-align: center;
// 	height: 100%;
// 	width: 50%;
// 	border-radius: ${pr => pr.radius};
// 	border-left: ${pr => pr.place === "right" ? "0px" : ""};
// 	border-color: #CCCCCC;
// 	outline: none;
// `;

const CalendarContainer = styled.div`
	
`;

const CalendarDropdown = ({ className, children }) => {
	return (
		<div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
		<CalendarContainer className={className}>
			<div style={{ background: "#f0f0f0" }}>
				What is your favorite day?
			</div>
			<div style={{ position: "relative" }}>{children}</div>
		</CalendarContainer>
	</div>
	);
};

export default CalendarDropdown;