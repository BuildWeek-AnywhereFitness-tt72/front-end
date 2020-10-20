import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

import { StyledLink, MainHeader, Banner } from "../../../reusable-components/reusableComponents";
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

const StyledDays = styled.div`
    display: flex;
`


const initialFormValues = {
    name: '',
    // description: '', 
    // cost: '', 
    address: '',
    //city
    //state
    //zip
    type: '',
    size: '', //maxsize
    length: '', // duration
    level: '', //intensity
    // arrival: '',
    // know: '',
    date/time in one field "date"
    // timeStart: '',
    // timeEnd: '',
    // monday: false,
    // tuesday: false,
    // wednesday: false,
    // thursday: false,
    // friday: false,
    // saturday: false,
    // sunday: false,
}

const initialFormErrors = {
    name: '',
    description: '',
    cost: '',
    address: '',
    type: '',
    size: '',
    length: '',
    level: '',
    arrival: '',
    know: '',
    timeStart: '',
    timeEnd: '',
}

const initialDisabled = true;


const CreateClass = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled)

    const inputChange = (name, value) => {
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
            description: formValues.description.trim(),
            cost: formValues.cost.trim(),
            address: formValues.address.trim(),
            type: formValues.type,
            size: formValues.size.trim(),
            locations: {
                address: formValues.address.trim(),

            },
            length: formValues.length.trim(),
            level: formValues.level,
            arrival: formValues.arrival.trim(),
            know: formValues.know.trim(),
            timeStart: formValues.timeStart,
            timeEnd: formValues.timeEnd,
            days: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].filter((day) => formValues[day]),
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

                <label>
                    Class Description
                                  
                    <textarea
                        value={formValues.description}
                        onChange={inputChange}
                        name='description'
                    />
                </label>

                <label>
                    Class Cost (in US dollars)

                    <input
                        value={formValues.cost}
                        onChange={inputChange}
                        name='cost'
                        type='number'
                    />
                </label>

                <label>
                    Class Equipment Requirements
                    
                    <textarea
                        value={formValues.equipment}
                        onChange={inputChange}
                        name='equipment'
                    />
                </label>

                <label>
                    Class Address

                    <input
                        value={formValues.address}
                        onChange={inputChange}
                        name='address'
                        placeholder='Type Address Here...'
                        type='text'
                    />
                </label>

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
                        value={formValues.size}
                        onChange={inputChange}
                        name='size'
                        type='number'
                    />
                </label>

                <label>
                    Class Length (in minutes)

                    <input
                        value={formValues.length}
                        onChange={inputChange}
                        name='length'
                        type='number'
                        placeholder='Type number here...'
                    />
                </label>

                <label>
                    Class Level
                    
                    <select
                        onChange={inputChange}
                        value={formValues.level}
                        name='level'
                    >
                        <option value=''>--Select a Level--</option>
                        <option value='beginner'>Beginner</option>
                        <option value='intermediate'>Intermediate</option>
                        <option value='advanced'>Advanced</option>

                    </select>
                </label>

                <label>
                    When to Arrive
                    
                    <span>Provide detailed information on ideal arrival time...</span>

                    <textarea
                        value={formValues.arrival}
                        onChange={inputChange}
                        name='arrival'
                    />
                </label>

                <label>
                    What You Need To Know
                    <span>Provide detailed information on what attendees need to know. (i.e. potential dangers, alternative entrances, specific skills, etc.)...</span>

                    <textarea
                        value={formValues.know}
                        onChange={inputChange}
                        name='know'
                    />
                </label>

                <label >
                    Class Time
                    <div className='time'>
                        <input
                            value={formValues.timeStart}
                            onChange={inputChange}
                            name='timeStart'
                            type='time'
                        />
                        To
                        <input
                            value={formValues.timeEnd}
                            onChange={inputChange}
                            name='timeEnd'
                            type='time'
                        />
                    </div>
                    
                </label>

                <StyledDays>
                    Class Day(s)
                    <label>
                        Monday
                        <input
                            type='checkbox'
                            name='monday'
                            checked={formValues.monday}
                            onChange={inputChange}
                        />
                    </label>
                    <label>
                        Tuesday
                        <input
                            type='checkbox'
                            name='tuesday'
                            checked={formValues.tuesday}
                            onChange={inputChange}
                        />
                    </label>
                    <label>
                        Wednesday
                        <input
                            type='checkbox'
                            name='wednesday'
                            checked={formValues.wednesday}
                            onChange={inputChange}
                        />
                    </label>
                    <label>
                        Thursday
                        <input
                            type='checkbox'
                            name='thursday'
                            checked={formValues.thursday}
                            onChange={inputChange}
                        />
                    </label>
                    <label>
                        Friday
                        <input
                            type='checkbox'
                            name='friday'
                            checked={formValues.friday}
                            onChange={inputChange}
                        />
                    </label>
                    <label>
                        Saturday
                        <input
                            type='checkbox'
                            name='saturday'
                            checked={formValues.saturday}
                            onChange={inputChange}
                        />
                    </label>
                    <label>
                        Sunday
                        <input
                            type='checkbox'
                            name='sunday'
                            checked={formValues.sunday}
                            onChange={inputChange}
                        />
                    </label>
                </StyledDays>

                <StyledLink disabled={disabled}>Create Class</StyledLink>
            </StyledForm>
        </StyledContainer>
    )
}

export default CreateClass;