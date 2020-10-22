import React, { useState } from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import { allUsers, classTypeImages } from "../../../reusable-components/data";
import PunchCard from "./components/PunchCard";
// import ClassCard  from "../../class-manage-user/components/ClassCard";
// import { MainHeader } from "../../../reusable-components/reusableComponents";

const getRandomUser = () => {
	return allUsers[Math.floor(Math.random() * allUsers.length)];
};

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

const PunchContainer = styled.div`
	height: 70rem;
	width: 80%;
	margin: 0 auto;
	background-color: white;
	display: flex; 
	flex-flow: column nowrap;
	justify-content: center;
	h1 {
		padding: 2rem;
	}
	align-items: center;
	div.class-gal {
		display: flex;
		flex-flow: row nowrap;
		overflow: none;
		height: 65%;
		justify-content: center;
		align-items: center;
	}
`;

const NoContainer = styled.div`
	height: 70vh;
	width: 80%;
	margin: 0 auto;
	background-color: white;
	display: flex;
	flex-flow: column nowrap;
	justify-content: center;
	align-items: space-between;
	div.no-class {
		display: flex;
		flex-flow: column nowrap;
		justify-content: center;
		align-items: center;
	}
`;


const PunchClass = props => {
	const [currentUser, setCurrentUser] = useState(getRandomUser());
	const [sessionsObj, setSessionsObj] = useState(currentUser["sessions"]);
	const [sessions, setSessions] = useState([]);
	console.log(sessionsObj);
	if (sessionsObj.length === 0) {
		return (
			<NoContainer>
				<div className="no-class">
					<h1>You have no active sessions to make a punch card for!</h1>
					<EditLink to="/instructor/create">Create a Class</EditLink>
				</div>
		</NoContainer>
		);
	} 

	return (
		<PunchContainer>
			<h1>My Classes</h1>
			<div className="class-gal">
			{
					sessionsObj.map(s => {
						// console.log(s["sessions"]);
						console.log(s["sessions"]);
						return <PunchCard key={s["sessions"]["sessionid"]} session={s["sessions"]} />
					})
			}
			</div>
		</PunchContainer>
	);
};

export default PunchClass;