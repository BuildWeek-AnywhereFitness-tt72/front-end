import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import { StyledLink } from "../../../reusable-components/reusableComponents";
import createClassSchema from './validation/createClassSchema';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5%;
`

const StyledForm = styled.form`
    background-color: ${pr => pr.theme.white};
    width: 80%;
    padding: 2%;
    border-radius: 4px;
    display: flex;
    flex-direction: column;

    label {
        font-weight: bold;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }

    label>span {
        color: ${pr => pr.theme.primaryOrange}
    }

    input {
        display: block;
        width: 40%;
    }

    textarea {
        width: 40%;
    }

    select {
        width: 40%;
    }

    .time {
        display: flex;
        flex-direction: row;
        
        input {
            width: 60px;
        }
    }
`

const StyledAddress = styled.div`
    .addressLine {
        display: flex;
        justify-content:  flex-start;

        label {
            width: 15%;
        }

        input {
            width: 100%;
        }

        .zip {
            width: 10.75%;
        }
    }
`


const initialFormValues = {
    name: '',
    type: '',
    time: '',
    duration: '',
    intensity: '',
    maxsize: '',
    address: '',
    city: '',
    state: '', 
    zip: '',
}

const initialFormErrors = {
    name: '',
    type: '',
    time: '',
    duration: '',
    intensity: '',
    maxsize: '',
    address: '',
    city: '',
    state: '',
    zip: '',
}

const initialDisabled = true;


const CreateClass = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString();
    }


    const inputChange = (evt) => {

        const { name, value } = evt.target;
        console.log(name, value)
        yup
            .reach(createClassSchema, name)
            .validate(value)
            .then(() => {
                setFormErrors({
                    ...formErrors,
                    [name]: '',
                });
            })
            .catch((err) => {
                setFormErrors({
                    ...formErrors,
                    [name]: err.errors[0]
                });
            });
        setFormValues({
            ...formValues,
            [name]: value,
        })
    }

    const formSubmit = () => {
        const newClass = {
            name: formValues.name.trim(),
            type: formValues.type,
            time: formValues.time,
            duration: formValues.duration,
            intensity: formValues.intensity,
            maxsize: formValues.maxsize,
            location: {
                address: formValues.address.trim(),
                city: formValues.city.trim(),
                state: formValues.state.trim(),
                zip: formValues.zip.trim(),
            }
        };

        //Post Function Call
    }

    useEffect(() => {
        

        createClassSchema.isValid(formValues).then((valid) => {
            setDisabled(!valid)
        });
    }, [formValues])


    return (
        <StyledContainer>
            <StyledForm onSubmit={formSubmit}>
                <h1>Create Class</h1>

                <label>
                    Class Name
                    
                    <input
                        value={formValues.name}
                        onChange={inputChange}
                        name='name'
                        type='text'
                    />
                </label>

                <StyledAddress>
                    <div>
                        <label>
                            Address
                            <input
                                value={formValues.address}
                                onChange={inputChange}
                                name='address'
                                placeholder='Type Address Here...'
                                type='text'
                            />
                        </label>
                    </div>
                    
                    <div className='addressLine'>
                        <label>
                            City
                            <input
                                value={formValues.city}
                                onChange={inputChange}
                                name='city'
                                type='text'
                            />
                        </label>
                        <label>
                            State
                             <input
                                value={formValues.state}
                                onChange={inputChange}
                                name='state'
                                type='text'
                            />
                        </label>
                        <label className='zip'>
                            Zip
                            <input
                                value={formValues.zip}
                                onChange={inputChange}
                                name='zip'
                                type='text'
                            />
                        </label>
                    </div>
                </StyledAddress>
                
                

                <label>
                    Class Type
                    
                    <select
                        onChange={inputChange}
                        value={formValues.type}
                        name='type'
                    >
                        <option value=''>--Select a Type--</option>
                        <option value='boxing'>Boxing</option>
                        <option value='yoga'>Yoga</option>
                        <option value='spinning'>Spinning</option>

                    </select>
                </label>

                <label>
                    Class Size

                    <input
                        value={formValues.maxsize}
                        onChange={inputChange}
                        name='maxsize'
                        type='number'
                    />
                </label>

                <label>
                    Class Length (in minutes)

                    <input
                        value={formValues.duration}
                        onChange={inputChange}
                        name='duration'
                        type='number'
                        placeholder='Type number here...'
                    />
                </label>

                <label>
                    Class Level
                    
                    <select
                        onChange={inputChange}
                        value={formValues.intensity}
                        name='intensity'
                    >
                        <option value=''>--Select a Level--</option>
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='advanced'>Advanced</option>

                    </select>
                </label>

                <label >
                    Class Time
                    <div className='time'>
    
                        <input
                            value={formValues.time}
                            onChange={inputChange}
                            name='time'
                            type='datetime-local'
                        />
                    </div>
                    
                </label>

                

                <StyledLink disabled={disabled}>Create Class</StyledLink>
            </StyledForm>
        </StyledContainer>
    )
}

export default CreateClass;