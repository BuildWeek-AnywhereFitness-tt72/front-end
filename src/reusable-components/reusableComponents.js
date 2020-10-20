import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



// use the following syntax to import any given component: 
// import { StyledLink, MainHeader, Banner } from "./filePath"


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
	}
`;

export const HeroImgJr = styled.div.attrs(pr => ({
	height: pr.height || "60rem",
	position: pr.position || "50% 34%",
	url: pr.url || "https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
}))`
	height: ${pr => pr.height};
	max-width: ${ pr => pr.width ? pr.width : "100%"};
	width: ${pr => pr.width ? pr.width : ""};
	background-image: url(${pr => pr.url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: ${pr => pr.position};
`;

export const searchIconSVG = (
	<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path fill-rule="evenodd" clip-rule="evenodd" d="M15.502 14H14.708L14.432 13.726C15.407 12.589 16 11.115 16 9.49997C16 5.90997 13.09 2.99997 9.5 2.99997C5.91 2.99997 3 5.90997 3 9.49997C3 13.09 5.91 16 9.5 16C11.115 16 12.588 15.408 13.725 14.434L14.001 14.708V15.5L18.999 20.491L20.49 19L15.502 14ZM9.5 14C7.014 14 5 11.986 5 9.49997C5 7.01497 7.014 4.99997 9.5 4.99997C11.985 4.99997 14 7.01497 14 9.49997C14 11.986 11.985 14 9.5 14Z" fill="black" fill-opacity="0.54" />
	</svg>
);

export const locationIconSVG = (
	<svg width="15" height="21" viewBox="0 0 15 21" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path d="M7.5 0C3.35559 0 0 3.39223 0 7.57212C0 10.3768 0.937149 11.2533 5.90902 19.302C6.64281 20.4898 8.35801 20.4884 9.09094 19.302C14.0654 11.2491 15 10.3763 15 7.57212C15 3.38785 11.6401 0 7.5 0ZM4.375 7.57212C4.375 5.82962 5.7741 4.41707 7.5 4.41707C9.2259 4.41707 10.625 5.82962 10.625 7.57212C10.625 9.31461 9.2259 10.7272 7.5 10.7272C5.7741 10.7272 4.375 9.31461 4.375 7.57212Z" fill="#FF9233" />
	</svg>
);