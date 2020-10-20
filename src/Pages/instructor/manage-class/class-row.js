import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { StyledLink, MainHeader, Banner } from "../../../reusable-components/reusableComponents";


const StyledRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    .btns {
        display: flex;
    }
`
const Button = styled(Link)`
	background-color: ${pr => pr.theme.primaryOrange};
	color: ${pr => pr.theme.charcoal};
	font-size: 2rem;
	border-radius: 5px;
    font-weight: 500;
    width: 100%;
    margin: 5px;
    padding: 2px 10px;
	display: flex;
	flex-flow: row nowrap;
	justify-content: center;
`


const ClassRow = (props) => {

    const { time, duration, name, maxsize } = props.session;

    return (
        <StyledRow>
            <h6>{time}</h6>
            <h6>{duration}</h6>
            <h6>{name}</h6>
            <h6>{maxsize}</h6>

            <div className='btns'>
                <Button to="#">Edit</Button>
                <Button to="#">Delete</Button>
            </div>
        </StyledRow>
    )
}

export default ClassRow;