import React, {useState} from "react";
import styled from "styled-components";
import ClassSearchHead from "../class-search/ClassSearchHead";
import ClassCard from "./components/ClassCard.js";

import { HeroImgJr } from "../../reusable-components/reusableComponents";

const StyledHeroImg = styled(HeroImgJr)`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const StyledClassManage = styled.div`
	color: ${pr => pr.theme.charcoal};
	div.main-gal {
		display: block;
		height: 65rem;
		width: 90%;
		background-color: white;
		h3 {
			font-size: 3rem;
			font-weight: 500;
			line-height: 3.522rem;
		}
		div.manage-gallery {
			display: flex;
			flex-flow: column nowrap;
			justify-content: space-evenly;
			align-items: center;
			div.class-container {
				display: flex;
				flex-flow: column nowrap;
				overflow-x: scroll;
				overflow-y: hidden;
				width: 90%;
				height: 50%;
			}
		}
	}
`;

const initActiveSessions = [
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 9",
		time: "7:00am – 7:50am",
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 7",
		time: "7:00am – 7:50am",
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 5",
		time: "7:00am – 7:50am",
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
	},
	{
		className: "Boxing in an Abandoned Ring With Chris (creepy)",
		date: "Thursday, Dec 5",
		time: "7:00am – 7:50am",
	},
];

const ClassManage = props => {
	// const [user, setUser] = useState();
	const [activeSessions, setActiveSessions] = useState(initActiveSessions);
	const [sessionHistory, setSessionHistory] = useState(initSessionHistory);

	return (
		<StyledClassManage>

			<ClassSearchHead />
			<StyledHeroImg className="hero-image-container" position={"50% 30%"} height={"72rem"}>
			<div className="main-gal">
				<h3>Manage My Classes</h3>
				<div className="manage-gallery">
					<div className="my-classes class-container">
						{
							activeSessions.map(session => {
								return <ClassCard session={session} />
							})
						}
					</div>
					<div className="my-history class-container">
						{
							sessionHistory.map(session => {
								return <ClassCard session={session} />
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