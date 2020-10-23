import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {axiosWithAuth} from "../../../utils/axioswauth";

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
        flex-wrap: wrap;
        justify-content: space-around;
    }
    
`

const StyledEnrollment = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

`

const StyledTable = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`

const StyledTableHeader = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    h4 {
        width: 20%;
        text-align: center;
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

const initialEnrollment = [
    {
        time: '10/20/20 15:00',
        duration: '50 min',
        name: 'Boxing in an Abandoned Ring with Chris', 
        maxsize: 20,
    },
    {
        time: '10/20/20 15:00',
        duration: '50 min',
        name: 'Boxing in an Abandoned Ring with Chris',
        maxsize: 20,
    },
    {
        time: '10/20/20 15:00',
        duration: '50 min',
        name: 'Boxing in an Abandoned Ring with Chris',
        maxsize: 20,
    },
]

const ManageClass = () => {

    const [activeSessions, setActiveSessions] = useState([]);
    const [currentEnrollment, setCurrentEnrollment] = useState(initialEnrollment);

    useEffect(() => {
        if(activeSessions.length === 0) {
            axiosWithAuth()
            .get("/sessions/sessions")
            .then(res => {
                setActiveSessions(res.data);
            }).catch(err => console.log(err));
        }
    }, [activeSessions])

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

                <StyledEnrollment className='enrollment'>
                <h2>Current Class Enrollment</h2>
                    <StyledTable className='table'>
                        <StyledTableHeader className='tableHeader'>
                            <h4>Time</h4>
                            <h4>Duration</h4>
                            <h4>Name</h4>
                            <h4>Size</h4>
                            <h4>Action</h4>

                        </StyledTableHeader>
                        {
                            currentEnrollment.map(session => {
                                return <ClassRow
                                    key={session}
                                    session={session}
                                />
                            })
                        }
                    
                    </StyledTable>
                </StyledEnrollment>
            </div>
        </StyledContainer>
    )
}

export default ManageClass;

