// import React, {useState} from "react";
import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";

const StyledClassImg = styled(HeroImgJr)`
	border-radius: 25px 25px 0px 0px;
	height: 50%;
`;

const RescheduleLink = styled(Link)`
	display: block;
	background-color: ${pr => pr.theme.primaryOrange};
	color: ${pr => pr.theme.charcoal};
	&:hover {
		color: ${pr => pr.theme.charcoal};
	}
	font-size: 2rem;
	border-radius: 5px;
	font-weight: 300;
	width: 22.4rem;
	height: 3rem;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
`;

const StyledClassCard = styled.div`
	width: 35rem;
	height: 24rem;
	margin: 2rem 2rem;
	/* border-radius: 50%; */
	div.session-title-text {
		display: flex;
		height: 100%;
		width: 100%;
		background: rgba(248, 248, 248, 0.2);	
	}
	div.session-details {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 50%;
		background: transparent;
		border-radius: 0px 0px 25px 25px;
		border: 1px solid #CCCCCC;
		outline: none;
		h6 {
			font-size: 1.4rem;
			line-height: 1.644rem;
			font-weight: 500;
		}
		h2 {
			font-size: 1.8rem;
			line-height: 2.113rem;
			font-weight: 700;
		}
	}
`;


const ClassCard = (props) => {
	// const {sessionName, url, date, time, active} = props.session;
	const {sessionName, url, date, time, } = props.session;
	// const [isActive, setIsActive] = useState(active);

	return (
		<StyledClassCard>
			<StyledClassImg className="session-img" url={url} height={"50%"}>
				<div className="session-title-text">
					<h1>{sessionName}</h1>
				</div>
			</StyledClassImg>
			<div className="session-details">
				<h6>{date}</h6>
				<h2>{time}</h2>
				<RescheduleLink to="/manage-class/#">Reschedule</RescheduleLink>
			</div>
		</StyledClassCard>
	);
};

export default ClassCard;