import React, { useState } from 'react';

import styled from "styled-components";

const LandingPage = styled.div`
	max-width: 100%;
	font-family: Raleway, sans-serif;
	color: ${pr => pr.theme.charcoal};
	h1 {
			font-size: 6rem;
		}
	h3 {
		font-size: 8.6rem;
		line-height: 10.1rem;
		letter-spacing: 0.02rem;
	}
	p {
		font-weight: 600;
		font-size: 1.8rem;
		line-height: 2.5rem;
	}
	h4 {
			margin: 0;
			text-align: center;
			font-weight: 800;
			font-size: 2rem;
			line-height: 2.3rem;
			letter-spacing: 0.05em;
	}
	div.header {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
		nav {
			a {
				display: inline-block;
				font-weight: 800;
				font-size: 2rem;
				font-style: normal;
				letter-spacing: 0.05rem;
				padding: 10px;
				color: ${pr => pr.theme.charcoal};
			}
		}
	}
	div.welcome-banner {
		background: ${pr => pr.theme.primaryOrange};
		padding: 10px;
		color: ${pr => pr.theme.eggshell};
		font-weight: 600;
		font-size: 1.5rem;
		margin-bottom: 0px;
	}
	div.background-img {
		margin-top: 0;
		height: 560px;
		background-image: url("https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
		background-repeat: no-repeat;
		max-width: 100%;
		background-size: cover;
		background-position: center;
		background-blend-mode: darken;
		div.hero-text-container {
			background: rgba(248, 248, 248, 0.3);
			height: 100%;
		}
	}
	div.link-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
	}
`;

const StyledLink = styled(Link)`
	display: inline-block;
	width: 28rem;
	border-radius: 5px;
	text-align: center;
	font-size: 3rem;
	background-color: ${pr => pr.theme.primaryOrange};
	color: ${pr => pr.theme.charcoal};
	text-decoration: none;
	padding: 2rem;
	margin: 1rem;
	&:hover {
		text-decoration: underline;
		color: ${pr => pr.theme.charcoal}
	}
`;

const HeroTextContainer = styled.div`
	display: ${pr => pr.isOpen ? "block" : "none"};
	position: relative;
	width: 770px;
	height: 290px;
	left: 25px;
	top: 180px;
`;

const HelpCollapse = styled.div`
	display: ${pr => pr.isHelpOpen ? "block" : "none"};
	transition: all 0.4s ease-in-out;
	height: 250px;
	max-width: 100%;
`;

const DeveloperNav = styled.div`
	background: lightgray;
	border: 10px solid ${pr => pr.theme.primaryOrange};
	text-align: center;
	width: 90%;
	margin: 200px auto;
	h4 {
		font-size: 5rem;
		padding: 2rem;
	}
	p {
		font-size: 2rem;
	}
	nav {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		align-items: center;
	}
`;

const Dash = () => {
	const [isBrowseOpen, setIsBrowseOpen] = useState(true);
	const [isAboutOpen, setIsAboutOpen] = useState(false);
	const [isHelpOpen, setIsHelpOpen] = useState(false);

	const handleAboutClick = () => {
		setIsAboutOpen(!isAboutOpen);
		setIsBrowseOpen(!isBrowseOpen);
	};

	const handleHelpClick = () => {
		setIsHelpOpen(!isHelpOpen);
	};

	const handleTitleClick = () => {
		setIsAboutOpen(false);
		setIsBrowseOpen(true);
	};

	return (
		<LandingPage className="landing-container">
			<div className="header">
				<h1 onClick={handleTitleClick}>Anywhere Fitness</h1>
				<nav className="top-nav">
					<a href="/Dash/#" onClick={handleHelpClick}>Help</a>
					<a href="/Dash/#" onClick={handleAboutClick}>About</a>
				</nav>
			</div>
			<div className="welcome-banner">
				<h4>The world is your gym.</h4>
				<h4>Welcome.</h4>
			</div>
			<HelpCollapse className="help-collapse" isHelpOpen={isHelpOpen}>
				<h3>Register/Cancel classes</h3>
				<p>Signing up for classes is easy. And you can cancel and reschedule classes with little to no cancellation fee.</p>
			</HelpCollapse>
			<div className="background-img">
				<div className="hero-text-container">
					<HeroTextContainer className="hero-text" isOpen={isBrowseOpen} >
						<h3>Browse classes</h3>
						<p>Our expert instructors conduct classes literally anywhere. Take a yoga class on a mountaintop. Do boot camp on the beach. Go to an abandoned mansion for mat pilates. The options are limitless.</p>
					</HeroTextContainer>
					<HeroTextContainer className="hero-text" isOpen={isAboutOpen} >
						<h3>Become Your Own Boss</h3>
						<p>Instead of needing a gym to attract clients, instructors can be their own boss and set up their fitness classes with a minimal start up fee.</p>
					</HeroTextContainer>
				</div>
			</div>
			<div className="link-container">
				<StyledLink to="/Login">Login</StyledLink>
			</div>

			{/* PURELY FOR EASE OF ACCESS — NOT PART OF THE PAGE */}
			<DeveloperNav className="for-developers">
				<h4>JUST FOR US</h4>
				<p>This is simply for ease of access; not part of the page! I figured it would be easier to navigate through all our pages if we had all the links in one spot</p>
				<nav>
					<StyledLink to="/Login">Login</StyledLink>
					<StyledLink to="/Dash">Dash</StyledLink>
					<StyledLink to="/class-search">Class Search</StyledLink>
				</nav>
			</DeveloperNav>
		</LandingPage>
	);
};

export default Dash;
