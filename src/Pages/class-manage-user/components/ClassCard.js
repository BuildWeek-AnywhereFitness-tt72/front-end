import React, {useState} from "react";
import styled from "styled-components";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";

const StyledCardContainer = styled.div`
	
`;

const ClassCard = (props) => {
	const {sessionName, url, date, time, active} = props.session;
	const [isActive, setIsActive] = useState(active);

	return (
		<StyledCardContainer>
			<HeroImgJr className="session-img" url={url}>
				<div className="session-title-text">
					<h1>{sessionName}</h1>
				</div>
			</HeroImgJr>
		</StyledCardContainer>
	);
};

export default ClassCard;