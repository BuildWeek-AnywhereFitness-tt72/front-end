import React from "react";
import styled from "styled-components";
import { HeroImgJr } from "../../reusable-components/reusableComponents";
import {classTypeImages} from "../../reusable-components/data";

const StyledResultCard = styled.div`
	font-family: Raleway;
	width: 100%;
	height: 18.6rem;
	border-bottom: 1px solid lightgray;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-evenly;
	align-items: center;
	padding: 2rem;
	div.card-container {
		display: flex;
		flex-flow: row nowrap;
		justify-content: center;
		align-items: center;
		&.left {
				width: 60%;
				border-right: 1px solid lightgray;
		}
		&.right {
			width: 20%;
		}
		div.class-card {
			display: flex;
			flex-flow: column nowrap;
			align-items: flex-start;
			p {
					font-size: 1.4rem;
					line-height: 1.6rem;
					font-weight: 500;
					font-style: normal;
				}
			&.details {
				width: 60%;
				h3 {
					font-size: 2rem;
					font-weight: 800;
					line-height: 2.35rem;
					font-style: normal;
					letter-spacing: 0.05;
					text-transform: uppercase;
					color: ${pr => pr.theme.mediumGray};
				}
				h6 {
					font-size: 1.6rem;
					font-weight: 600;
					line-height: 1.878rem;
					font-style: normal;
				}
			}
		}
	}
`;

const ResultImg = styled(HeroImgJr)`
	border-radius: 10px;
	height: 150px;
	width: 164px;
`;

const ResultCard = props => {
	const { result } = props;
	const { locations, name, type, } = result;
	// console.log(result);
	// console.log(locations, name, type);
	return (
		<StyledResultCard>
			<div className="card-container image">
				<ResultImg className="class-card image" url={classTypeImages["yoga"]} height="18.6rem" width="164px" position="center"></ResultImg>
			</div>
			<div className="card-container class-text left">
				<div className="class-card details">
					<h3>{type}</h3>
					<h6>{name}</h6>}
					{locations && <p>{`${locations.address}, ${locations.city} ${locations.state} ${locations.zip}`}</p>}
				</div>
			</div>
			<div className="card-container right">
				<div className="class-card description">
					<p>Lorem Ipsum there's no description to use from the endpoint. Lorem ipsum the session is without description.</p>
				</div>
			</div>
		</StyledResultCard>
	);
};

export default ResultCard;