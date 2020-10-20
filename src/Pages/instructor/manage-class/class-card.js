// import React, { useState } from 'react';
// import styled from 'styled-components';

// import { StyledLink, MainHeader, Banner } from "../../../reusable-components/reusableComponents";





// const ClassCard = (props) => {

//     const { name, type } = props;

//     return (
//         <div>
//             This is a class card
//         </div>
//     )
// }

// export default ClassCard;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HeroImgJr } from "../../../reusable-components/reusableComponents";

const StyledClassImg = styled(HeroImgJr)`
	border-radius: 25px 25px 0px 0px;
	height: 50%;
`;

const Button = styled(Link)`
	background-color: ${pr => pr.theme.primaryOrange};
	color: ${pr => pr.theme.charcoal};
	font-size: 2rem;
	border-radius: 5px;
    font-weight: 300;
    width: 100%;
    margin: 5px;
    padding: 5px 20px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
`;

const StyledClassCard = styled.div`
	width: 35rem;
	height: 24rem;
	margin: 2rem 2rem;
	.title {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
		background: rgba(248, 248, 248, 0.2);	
	}
	.details {
		display: flex;
		flex-flow: column nowrap;
		justify-content: space-evenly;
		align-items: center;
		width: 100%;
		height: 50%;
		background: transparent;
		border-radius: 0px 0px 25px 25px;
		border: 1px solid #CCCCCC;
		outline: none;

        .btns {
            display: flex;
        }

	}
`;


const ClassCard = (props) => {
    const { name, type, url} = props.session;

    return (
        <StyledClassCard>
            <StyledClassImg className="session-img" url={url} height={"50%"}>
                <div className="title">
                    <h1>{type}</h1>
                </div>
            </StyledClassImg>

            <div className="details">
                <h6>{name}</h6>
                <div className='btns'>
                    <Button to="#">Edit</Button>
                    <Button to="#">Delete</Button>
                </div>
            </div>
        </StyledClassCard>
    );
};

export default ClassCard;