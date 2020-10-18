import React from 'react';
import { Router, Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = styled.div`
	width: 100%;

`;

const Dash = () => {

	return (
		<LandingPage className="landing-container">
			<div className="header">
				<h1>Anywhere Fitness</h1>
			</div>
			<div className="welcome-banner">
				<p>The world is your gym.</p>
				<p>Welcome.</p>
			</div>
			<div>
				<h3>Browse classes</h3>
				<p>Our expert instructors conduct classes literally anywhere. Take a yoga class on a mountaintop. Do boot camp on the beach. Go to an abandoned mansion for mat pilates. The options are limitless.</p>
			</div>
			<nav>
				<Link to="/Login">Login</Link>
			</nav>
		</LandingPage>
	);
};

export default Dash;
