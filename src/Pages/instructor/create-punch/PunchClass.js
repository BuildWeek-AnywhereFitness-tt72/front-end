import React, [useState] from "react";
import styled from "styled-components";

import {allUsers} from "../../../reusable-components/data";

const getRandomUser = () => {
	return allUsers[Math.floor(Math.random() * allUsers.length)];
};

StyledLink.

const PunchClass = props => {
	const [currentUser, setCurrentUser] = useState(getRandomUsers());
	return (
	<PunchContainer>

	</PunchContainer>
	);
};

export default PunchClass;