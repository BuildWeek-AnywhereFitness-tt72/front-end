import React from "react";
import styled from "styled-components";

const StyledLanding = styled.div`
	display: ${pr => pr.displayParam};
	width: 60%;
	#hero-img {
		display: inline-block;
		width: 100%;
		/* width: 60%; */
		background-image: url("https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: 50% 25%;
		height: 900px;
		div.hero-text-container {
			background: rgba(0, 0, 0, 0.1);
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			h4 {
				font-size: 4rem;
				font-weight: 600;
				color: white;
				text-align: center;
			}
		}
	}
`;



const SearchLanding = props => {
	const {displayParam} = props;
	return (
	<StyledLanding displayParam={displayParam}>
		return (
			<div className="hero-image" id="hero-img">
				<div className="hero-text-container">
					<h4>The world is your gym. Welcome.</h4>
				</div>
			</div>
		</StyledLanding>
	);
};

export default SearchLanding;