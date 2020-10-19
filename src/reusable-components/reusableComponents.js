import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


// use import { StyledLink, MainHeader, Banner } from "./filePath"

export const StyledLink = styled(Link)`
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

export const MainHeader = styled.header`
	max-width: 100%;
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 40px;
	font-family: Raleway, sans-serif;
	color: ${pr => pr.theme.charcoal};
	h1 {
		font-size: 6rem;
	}
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
`;

export const AboutCollapse = styled.div`
		display: ${pr => pr.isHelpOpen ? "block" : "none"};
	transition: all 0.4s ease-in-out;
	height: 250px;
	max-width: 100%;
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
`;

export const Banner = styled.div`
	background: ${pr => pr.theme.primaryOrange};
	padding: 10px;
	color: ${pr => pr.theme.eggshell};
	font-weight: 600;
	font-size: 1.5rem;
	margin-bottom: 0px;
`;

export const HeroImage = styled.div`
	div.background-img {
		margin-top: 0;
		height: 560px;
		background-image: url("https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
		background-repeat: no-repeat;
		max-width: 100%;
		background-size: cover;
		background-position: center;
		background-blend-mode: darken;
	}
`;