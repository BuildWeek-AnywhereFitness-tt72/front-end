import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import { HeroImgJr } from "../../../../reusable-components/reusableComponents";
import { classTypeImages } from "../../../../reusable-components/data";

const StyledClassImg = styled(HeroImgJr)`
	border-radius: 25px 25px 0px 0px;
	height: 60%;
`;

const EditLink = styled(Link)`
	/* display: ${pr => pr.isshowing ? "flex" : "none"}; */
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
	background-color: ${pr => pr.theme.primaryOrange};
	color: white;
	&:hover {
		color: white;
	}
	font-size: 2rem;
	border-radius: 5px;
	font-weight: 300;
	width: 22.4rem;
	height: 3rem;
`;

const StyledPunchCard = styled.div`
	width: 35rem;
	min-width: 28rem;
	height: 30rem;
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

const PunchCard = props => {
	const { session } = props;
	const name = session["name"];
	const type = session["type"];
	const date = session["time"].split(" ")[0];
	const time = session["time"].split(" ")[1];
	// const url = classTypeImages["functional-fitness"];
	const getUrl = (classType) => {
		return classTypeImages[classType] ? classTypeImages[classType] : classTypeImages["other"];
	}

	return (
		<StyledPunchCard>
			<StyledClassImg className="session-img" url={getUrl()} height={"60%"} position={"center"} >
				<div className="session-title-text">
					<h1>{name}</h1>
				</div>
			</StyledClassImg>
			<div className="session-details">
				<h6>{type}</h6>
				<h6>{date}</h6>
				<h2>{time}</h2>
				<EditLink to="/classes/search">Create a Punch Card</EditLink>
			</div>

		</StyledPunchCard>);
};

export default PunchCard;