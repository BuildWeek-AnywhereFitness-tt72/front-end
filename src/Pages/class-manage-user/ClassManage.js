import React, { useState } from "react";
import styled from "styled-components";
import ClassSearchHead from "../class-search/ClassSearchHead";
import ClassCard from "./components/ClassCard.js";

import { HeroImgJr } from "../../reusable-components/reusableComponents";
import { user26, user26DOUBLE, user26MANY } from "./data/data";

const initActiveSessions = [
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 9",
		time: "7:00am – 7:50am",
		url: "https://s3-alpha-sig.figma.com/img/31fb/7ab6/dbf32d57b2e4821c280ece6bbc64b551?Expires=1604275200&Signature=PIuqCmx33YoLgMym7Q0wY5pKr9Z6jVyG55YzkQYzzd7xKB3E9ewQzMhOtkLJt1Cyf7~dGIUU~~IWE1ifsM8golpVA6MWLutdhkm57nXE2L9c3MRxS5xV~ai56i7AmlaISsRSl5qMGQVmkpDdZKhl0I6vu~aNZaJ-hsbKbR0F3fxbBzcffHIIeBqZs02W1s16DGUzg33eGZ5zy-2SBipUMogL7RiuKH1IVOp9ztzpFSy3HMN8MGv4Y9ZBGynIbfXcE2WEHG9pJg7HSE8JE557GRb7go5OCzStqcdDap0JxfEG~TCCuBNZEHhDL7dZLKvMtFodwcyOix7XpqQH1dTfbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
		active: true,
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 7",
		time: "7:00am – 7:50am",
		url: "https://s3-alpha-sig.figma.com/img/31fb/7ab6/dbf32d57b2e4821c280ece6bbc64b551?Expires=1604275200&Signature=PIuqCmx33YoLgMym7Q0wY5pKr9Z6jVyG55YzkQYzzd7xKB3E9ewQzMhOtkLJt1Cyf7~dGIUU~~IWE1ifsM8golpVA6MWLutdhkm57nXE2L9c3MRxS5xV~ai56i7AmlaISsRSl5qMGQVmkpDdZKhl0I6vu~aNZaJ-hsbKbR0F3fxbBzcffHIIeBqZs02W1s16DGUzg33eGZ5zy-2SBipUMogL7RiuKH1IVOp9ztzpFSy3HMN8MGv4Y9ZBGynIbfXcE2WEHG9pJg7HSE8JE557GRb7go5OCzStqcdDap0JxfEG~TCCuBNZEHhDL7dZLKvMtFodwcyOix7XpqQH1dTfbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
		active: true,
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 5",
		time: "7:00am – 7:50am",
		url: "https://s3-alpha-sig.figma.com/img/31fb/7ab6/dbf32d57b2e4821c280ece6bbc64b551?Expires=1604275200&Signature=PIuqCmx33YoLgMym7Q0wY5pKr9Z6jVyG55YzkQYzzd7xKB3E9ewQzMhOtkLJt1Cyf7~dGIUU~~IWE1ifsM8golpVA6MWLutdhkm57nXE2L9c3MRxS5xV~ai56i7AmlaISsRSl5qMGQVmkpDdZKhl0I6vu~aNZaJ-hsbKbR0F3fxbBzcffHIIeBqZs02W1s16DGUzg33eGZ5zy-2SBipUMogL7RiuKH1IVOp9ztzpFSy3HMN8MGv4Y9ZBGynIbfXcE2WEHG9pJg7HSE8JE557GRb7go5OCzStqcdDap0JxfEG~TCCuBNZEHhDL7dZLKvMtFodwcyOix7XpqQH1dTfbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
		active: true,
	},
];

const initSessionHistory = [
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 3",
		time: "7:00am – 7:50am",
		url: "https://s3-alpha-sig.figma.com/img/31fb/7ab6/dbf32d57b2e4821c280ece6bbc64b551?Expires=1604275200&Signature=PIuqCmx33YoLgMym7Q0wY5pKr9Z6jVyG55YzkQYzzd7xKB3E9ewQzMhOtkLJt1Cyf7~dGIUU~~IWE1ifsM8golpVA6MWLutdhkm57nXE2L9c3MRxS5xV~ai56i7AmlaISsRSl5qMGQVmkpDdZKhl0I6vu~aNZaJ-hsbKbR0F3fxbBzcffHIIeBqZs02W1s16DGUzg33eGZ5zy-2SBipUMogL7RiuKH1IVOp9ztzpFSy3HMN8MGv4Y9ZBGynIbfXcE2WEHG9pJg7HSE8JE557GRb7go5OCzStqcdDap0JxfEG~TCCuBNZEHhDL7dZLKvMtFodwcyOix7XpqQH1dTfbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
		active: false,
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 1",
		time: "7:00am – 7:50am",
		url: "https://s3-alpha-sig.figma.com/img/31fb/7ab6/dbf32d57b2e4821c280ece6bbc64b551?Expires=1604275200&Signature=PIuqCmx33YoLgMym7Q0wY5pKr9Z6jVyG55YzkQYzzd7xKB3E9ewQzMhOtkLJt1Cyf7~dGIUU~~IWE1ifsM8golpVA6MWLutdhkm57nXE2L9c3MRxS5xV~ai56i7AmlaISsRSl5qMGQVmkpDdZKhl0I6vu~aNZaJ-hsbKbR0F3fxbBzcffHIIeBqZs02W1s16DGUzg33eGZ5zy-2SBipUMogL7RiuKH1IVOp9ztzpFSy3HMN8MGv4Y9ZBGynIbfXcE2WEHG9pJg7HSE8JE557GRb7go5OCzStqcdDap0JxfEG~TCCuBNZEHhDL7dZLKvMtFodwcyOix7XpqQH1dTfbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
		active: false,
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 5",
		time: "7:00am – 7:50am",
		url: "https://s3-alpha-sig.figma.com/img/31fb/7ab6/dbf32d57b2e4821c280ece6bbc64b551?Expires=1604275200&Signature=PIuqCmx33YoLgMym7Q0wY5pKr9Z6jVyG55YzkQYzzd7xKB3E9ewQzMhOtkLJt1Cyf7~dGIUU~~IWE1ifsM8golpVA6MWLutdhkm57nXE2L9c3MRxS5xV~ai56i7AmlaISsRSl5qMGQVmkpDdZKhl0I6vu~aNZaJ-hsbKbR0F3fxbBzcffHIIeBqZs02W1s16DGUzg33eGZ5zy-2SBipUMogL7RiuKH1IVOp9ztzpFSy3HMN8MGv4Y9ZBGynIbfXcE2WEHG9pJg7HSE8JE557GRb7go5OCzStqcdDap0JxfEG~TCCuBNZEHhDL7dZLKvMtFodwcyOix7XpqQH1dTfbA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
		active: false,
	},
];


const StyledHeroImg = styled(HeroImgJr)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledClassManage = styled.div`
	color: ${pr => pr.theme.charcoal};
	div.main-gal {
		display: block;
		height: 95%;
		width: 90%;
		background-color: white;
		h3 {
			font-size: 3rem;
			font-weight: 500;
			line-height: 3.522rem;
			/* padding: 2rem; */
		}
		div.manage-gallery {
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-evenly;
			align-items: center;
			height: 90%;
			h5 {
				display: block;
				text-align: center;
				width: 33.5rem;
				height: 2.4rem;
				font-weight: 80rem;
				font-size: 2rem;
				line-height: 2.348rem;
				letter-spacing: 5;
			}
			div.class-container {
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				overflow-x: auto;
				/* overflow-x: scroll; */
				/* overflow-y: hidden; */
				width: 90%;
				height: 50%;
			}

		}
	}
`;

const ClassManage = props => {
	const [user, setUser] = useState(user26MANY);
	const [sessions, setSessions] = useState(user["sessions"]);
	const [activeSessions, setActiveSessions] = useState(user["sessions"]);
	const [sessionHistory, setSessionHistory] = useState(user["sessions"]);
	// const [activeSessions,] = useState(initActiveSessions);
	// const [sessionHistory,] = useState(initSessionHistory);
	// console.log(activeSessions);

	const handleDelete = (session) => {
		alert(`${user} deleted ${session.name}`);
	};

	return (
		<StyledClassManage>

			<ClassSearchHead user={user} />
			<StyledHeroImg className="hero-image-container" position={"50% 30%"} height={"82.12vh"}>
				<div className="main-gal">
					<h3>Manage My Classes</h3>
					<div className="manage-gallery">
						<h5>My Classes</h5>
						<div className="my-classes class-container">
							{
								activeSessions.map(session => {
									return <ClassCard id={`${session.sessions.sessionid} true`} session={session.sessions} isActive={true} handleDelete={handleDelete} />
								})
							}
						</div>
						<h5>My History</h5>
						<div className="my-history class-container">
							{
								sessionHistory.map(session => {
									return <ClassCard id={`${session.sessions.sessionid} ${false}`} session={session.sessions}  isActive={false} />
								})
							}
						</div>
					</div>
				</div>
			</StyledHeroImg>
		</StyledClassManage>

	);
};

export default ClassManage;