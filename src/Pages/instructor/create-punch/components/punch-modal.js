import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyledLink } from "../../../../reusable-components/reusableComponents"
import * as yup from 'yup';
import punchSchema from '../validation/punchSchema'
import PunchBox from './punch-box';
import { isCompositeComponent } from "react-dom/test-utils";

const StyledContainer = styled.div`
    .modal {
        background-color: ${pr => pr.theme.white};
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

const StyledForm = styled.form`
    h2 {
        padding: 10px;
    }

    label {
        display: flex;
        flex-direction: column;
        font-size: 2rem;

        select {
            padding: 10px;
            font-size: 1.6rem;
        }
    }
`

const StyledButton = styled.button`
	width: 28rem;
	border-radius: 5px;
	text-align: center;
	font-size: 2rem;
    background-color:${pr => pr.shown ? 'gray' : pr.theme.primaryOrange };
	color: ${pr => pr.theme.charcoal};
	padding: 1rem;
	margin: 1rem;
	&:hover {
		text-decoration: underline;
		color: ${pr => pr.theme.charcoal}
    }
    
    
`

const StyledGrid = styled.div`
    display: ${pr => pr.grid ? 'flex' : 'none'};
    flex-wrap: wrap;
    width: 50%;
    justify-content: center;
    align-items: center;

`

const initialFormValues = {
    classNumber: '0'
}

const initialFormErrors = {
    classNumber: ''
}

const initialShowGrid = false;
const initialDisabled = true;

const PunchModal = props => {

    const { modal, className } = props;
    const [formValues, setFormValues] = useState(initialFormValues)
    const [showGrid, setShowGrid] = useState(initialShowGrid)
    const [disabled, setDisabled] = useState(initialDisabled)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    let numberArray = [];

    for (let i = 1; i <= formValues.classNumber; i++) {
        numberArray.push(i)
    }

    const handleClick = () => {
        modal(false)
    }

    const submit = (evt) => {
        evt.preventDefault()
        setShowGrid(true)

    }

    const inputChange = (evt) => {
        const { name, value } = evt.target;
        console.log(name, value)

        yup 
            .reach(punchSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                })
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                })
            })
        
        setFormValues({
            ...formValues,
            [name]: value,
            
        })

    }


    useEffect(() => {
       

        punchSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        })
        numberArray = [];
    }, [formValues])

    return (
        <StyledContainer>
            <div className='modal'>
                <h1>Create Punch Pass</h1>

                <StyledForm onSubmit={submit}>
                    <h2>{className}</h2>
                    
                    <label>
                        Classes Needed Before Free Classes
                        <select
                            onChange={inputChange}
                            name='classNumber'
                            value={formValues.classNumber}
                        >
                            <option value=''>Choose Number</option>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20 </option>

                        </select>
                    </label>

                    <div className='buttons'>
                        <StyledButton
                            disabled={disabled}
                            shown={disabled}
                            type='submit'
                        >
                            Next
                        </StyledButton>
                        <StyledButton onClick={handleClick}>Cancel</StyledButton>
                    </div>
                   

                </StyledForm>

                
                <StyledGrid grid={showGrid}>
                    {
                        showGrid
                            ? numberArray.map(num => {
                                console.log(num)
                                return <PunchBox
                                    key={num}
                                    num={num}
                            />
                            })
                            : <div></div>
                    }
                </StyledGrid>
                 

            </div>
           
        </StyledContainer>
    );
};

export default PunchModal;