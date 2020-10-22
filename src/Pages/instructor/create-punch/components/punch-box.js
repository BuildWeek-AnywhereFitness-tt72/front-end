import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
`

const PunchBox = props => {

    const { num } = props;

    return (
        <StyledBox>
            <h4>{num}</h4>
        </StyledBox>
    );
};

export default PunchBox;