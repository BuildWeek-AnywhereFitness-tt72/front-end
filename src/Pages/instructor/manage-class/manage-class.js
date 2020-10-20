import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledLink, MainHeader, Banner } from "../../../reusable-components/reusableComponents";

import ClassRow from './class-row';



const ManageClass = () => {


    return (
        <div>
            <h1>Manage Classes</h1>
            <div className='myClasses'>
                <h2>My Classes</h2>
                <div>
                    This will be the pictured version of classes
                </div>
            </div>

            <div className='enrollment'>
                <h2>Current Class Enrollment</h2>
                <div className='table'>
                    <div className='tableHeader'>
                        This will be the table header
                    </div>
                    <ClassRow />
                </div>
            </div>
        </div>
    )
}

export default ManageClass;

