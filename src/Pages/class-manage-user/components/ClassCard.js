import React, {useState} from "react";
import styled from "styled-components";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";

const StyledClassImg = styled(HeroImgJr)`
	border-radius: 25px 25px 0px 0px;
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
`;

const ClassCard = (props) => {
	const {sessionName, url, date, time, active} = props.session;
	const [isActive, setIsActive] = useState(active);

	return (
		<StyledClassCard>
			<StyledClassImg className="session-img" url={url} height={"50%"}>
				<div className="session-title-text">
					<h1>{sessionName}</h1>
				</div>
			</StyledClassImg>
			<div className="session-details half-card bottom">

			</div>
		</StyledClassCard>
	);
};

export default ClassCard;