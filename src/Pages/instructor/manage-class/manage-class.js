import React, { useState } from 'react';
import styled from 'styled-components';

import { StyledLink, MainHeader, Banner } from "../../../reusable-components/reusableComponents";

import ClassRow from './class-row';
import ClassCard from './class-card';

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5 %;
    border-radius: 4px;

    .manage-classes {
        background-color: ${pr => pr.theme.white};
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

`

const StyledMyClasses = styled.div`
    .classList {
        display: flex;
        justify-content: flex-start;
    }
    
`



const initialSessions = [
    {
        name: "Boxing in an Abandoned Ring With Chris (creepy)",
        type: "Boxing",
        url: "https://image.shutterstock.com/image-photo/sportsman-muay-thai-boxer-fighting-260nw-626425517.jpg",
        active: true,
    },
    {
        name: "Yoga in an Abandoned Ring With Chris (creepy)",
        type: 'Yoga',
        url: "https://www.history.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY0OTE4ODAzMDQwMzE0Njg1/yoga-gettyimages-1142820079-promo.jpg",
        active: false,
    },
]

const ManageClass = () => {

    const [ activeSessions, setActiveSessions] = useState(initialSessions)

    return (
        <StyledContainer>
            <div className='manage-classes'>

            
            <h1>Manage Classes</h1>
            <StyledMyClasses className='myClasses'>
                <h2>My Classes</h2>
                <div className='classList'>
                     
                    {
                        activeSessions.map(session => {
                            return <ClassCard
                                session={session}
                            />
                        })
                    }
                    
                </div>
            </StyledMyClasses>

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
        </StyledContainer>
    )
}

export default ManageClass;

