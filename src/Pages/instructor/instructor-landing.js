import React, { useState } from 'react';
import styled from 'styled-components';
import { Switch, Route  } from 'react-router-dom'

import { StyledLink, MainHeader, Banner } from "../../reusable-components/reusableComponents";

import CreateClass from './create-class/create-class';
import ManageClass from './manage-class/manage-class';

const BackgroundImg = styled.div`
    margin-top: 0;
	height: 1500px;
	background-image: url("https://s3-alpha-sig.figma.com/img/9adf/3259/6e5496fba2de53fa2ad308e1607bae4b?Expires=1603670400&Signature=aXc3ptln6GHEwJfJhkE3VvPI0lk772EyadQgWoe0sqIqNtc5HrkUBNVVNWbNduvI5EN1pM~23vtZIXQDGtJqrXVTR1eZsljoCGCCUqHtETHPvyp5Nq5czwym3CLL-I0GXx1m5aYGbh-oY-nTeTrGaQIiaFbOBhLdQjr9BBiWQRIIujOi87yW6C81ZPfxJ1AvkwrAzWcs50aaY3wojabWg6JiMwfRl24~ryCblh5vGkDrAsrAYQp5RJTZClH~V2LyMyScK6o8bkHZxLrIpNnWfH8cETjag96V1qV2itgWsgo-FW940~Fjn~avYGJODdv5Yihipv-tg1f7-CdtACY7Cg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA");
	background-repeat: no-repeat;
	max-width: 100%;
	background-size: cover;
	background-position: center;
	background-blend-mode: darken;
`


const InstructorLanding = () => {
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
        <div>
            <MainHeader>
                <h1 onClick={handleTitleClick}>Anywhere Fitness</h1>
                <nav className="top-nav">
                    <a href="/Dash/#" onClick={handleHelpClick}>Help</a>
                    <a href="/Dash/#" onClick={handleAboutClick}>About</a>
                </nav>
            </MainHeader>
            <Banner>
                <nav>
                    <StyledLink to='/instructor'>Profile</StyledLink>
                    <StyledLink to='/instructor/create'>Create a Class</StyledLink>
                    <StyledLink to='/instructor/manage'>Manage Classes</StyledLink>
                    <StyledLink to='#'>Dashboard</StyledLink>
                </nav>
            </Banner>
            <BackgroundImg>
                <Switch>
                    <Route path='/instructor/manage'>
                        <ManageClass />
                    </Route>
                    <Route path='/instructor/create'>
                        <CreateClass />
                    </Route>
                </Switch>
            </BackgroundImg>

            
        </div>
    )
}

export default InstructorLanding;