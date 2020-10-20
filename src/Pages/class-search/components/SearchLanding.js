import React from "react";
import styled from "styled-components";

const StyledLanding = styled.div`
	display: flex;
	justify-content: space-between;
	#hero-img {
		display: inline-block;
		width: 60%;
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
	#map-img {
		display: inline-block;
		width: 38%;
		background-image: url("https://s3-alpha-sig.figma.com/img/fbd8/6e44/0960ae4e0d226420c2a979f6b5f42e32?Expires=1604275200&Signature=YCPHs0XJ5npKgFthqu0YxyHAwq5Jr1JnJByIokoggAWAIO58whmVu-WadtoZJzepHiE2pIAzZ8CyfAh-y8-e52gxTZhPh0PFQTDpxrP2Zp1ubVzVbssuCt6Ccn88RYWBAt3-mYOweWXmjL09FCtwGZCDmAhUUsy2mTzuA7Uao29BTA9HVte9wKF~Psnxg1vXgoksIoQJxPqYckDHcZaqRYoAwdpv4xbS9vKEHbrIPih6uh8H660fFrpABnzXzCRzuPiwrWifHStHQVNM95PA6YrIY0qV~9wxBTr0-HciPpgxjo3HlnfvvR~TkH2aRyuflOptPIvYYmDzpeolO4UTng__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		height: 900px;
		overflow: hidden;
	}
`;

const SearchLanding = props => {

	return (
		<StyledLanding>
			<div className="hero-image" id="hero-img">
				<div className="hero-text-container">
					<h4>The world is your gym. Welcome.</h4>
				</div>
			</div>
			<div className="map-image" id="map-img"></div>
		</StyledLanding>
	);
};

export default SearchLanding;