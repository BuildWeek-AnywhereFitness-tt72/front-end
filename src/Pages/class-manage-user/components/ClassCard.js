import React, {useState} from "react";
// import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";
import {classTypeImages} from "../../../reusable-components/data";

const StyledClassImg = styled(HeroImgJr)`
	border-radius: 25px 25px 0px 0px;
	height: 50%;
`;

const RescheduleLink = styled(Link)`
	display: ${pr => pr.isshowing ? "flex" : "none"};
	flex-flow: row nowrap;
	justify-content: center;
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
`;

const StyledClassCard = styled.div`
	width: 35rem;
	min-width: 28rem;
	height: 24rem;
	margin: 2rem 2rem;
	/* border-radius: 50%; */
	div.session-title-text {
		/* position: relative; */
		display: inline-flex;
		/* font-size: 0; */
		height: 100%;
		width: 100%;
		/* background: rgba(248, 248, 248, 0.3);	 */
		background: rgba(0, 0, 0, 0.2);
		border-radius: 25px 25px 0px 0px;
		overflow: none;
		h1 {
			padding: 2rem;
			color: white;
		}
		div.span-wrap {
			/* display: ${pr => pr.isshowing ? "inline-block" : "none"}; */
			display: inline-block;
			position: relative;
			/* font-size: 0; */
			width: 10px;
			height: 10px;
			span.delete {
				display: inline-block;
				padding: 5px;
				position: absolute;
				z-index: 100;
				background-color: ${pr => pr.theme.primaryOrange};
				padding: 5px;
				color: white;
				font-weight: bold;
				cursor: pointer;
				text-align: center;
				font-size: 22px;
				line-height: 15px;
				border-radius: 50%;
				&:hover {
					opacity: 1;
				}
			}
		}
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
	const [modalActive, setModalActive] = useState(false);
	const { session, isActive } = props;
	const name = session["name"];
	const type = session["type"];
	const date = session["time"].split(" ")[0];
	const time = session["time"].split(" ")[1];
	const url = classTypeImages["functional-fitness"];

	const getUrl = (classType) => {
		return classTypeImages[classType] ? classTypeImages[classType] : classTypeImages["other"];
	}

	const handleClick = () => {
		setModalActive(!modalActive);
	};

	
	// const date = dateTimeArr[0];
	// const [isActive, setIsActive] = useState(active);
	
	return (
		<StyledClassCard>
			<StyledClassImg className="session-img" url={getUrl()} height={"50%"} position={"center"} >
				<div className="session-title-text">
				<div className="span-wrap" showing={isActive.toString()} isshowing={isActive}>
					<span 
					className="delete" 
					title="delete" 
					onClick={handleClick}
					showing={isActive.toString()} 
					isshowing={isActive}>&times;</span>
				</div>
					<h1>{name}</h1>
				</div>
			</StyledClassImg>
			<div className="session-details">
				<h6>{type}</h6>
				<h6>{date}</h6>
				<h2>{time}</h2>
				<RescheduleLink to="/classes/search" isshowing={isActive}>Reschedule</RescheduleLink>
			</div>
		</StyledClassCard>
	);
};

export default ClassCard;