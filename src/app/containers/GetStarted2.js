import { Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import styled from 'styled-components'

const Conatainer = styled.div`
    background: linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff 50%,
        #8080ff 50%,
        #ff66ff 100%
    );
    height: 100vh;
    padding: 20px;
    padding-left: 150px;
    padding-top: 60px;
    .butt {
        justify-content: space-between;
        text-decoration: none;
        background-color: white;
    }
`
const Left = styled.div`
    flex: 1;
    margin-top: 100px;
    align-items: center;
`

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 50px;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 5px;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

const GetStarted2 = () => {
    return (
        <Conatainer>
            <Wrapper>
                <Left>
                    <div>
                        <Welcome name="helol" />
                    </div>
                    <h2 style={{}}>{/* <b>Hey {props.fname}!</b> */}</h2>
                    <p>What would you link to do in TAXRX?</p>
                </Left>
                <Right>
                    <h2 style={{ color: 'whitesmoke', marginBottom: '20px' }}>
                        Choose a starting point{' '}
                    </h2>
                    <p style={{ color: 'whitesmoke', marginBottom: '20px' }}>
                        You can do more later
                    </p>
                    <SearchContainer>
                        <Button
                            className="butt"
                            variant="outlined"
                            startIcon={
                                <LocalAtmOutlinedIcon
                                    style={{
                                        color: 'white',
                                        display: 'block',
                                        height: '40px',
                                        width: '40px',
                                        'border-radius': '50%',
                                        border: '1px solid blue',
                                        backgroundColor: 'blue',
                                    }}
                                />
                            }
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        color: 'blue',

                                        display: 'block',
                                        height: '20px',
                                        width: '20px',
                                    }}
                                />
                            }
                        >
                            <Link to="/">Send Professional invoices</Link>
                        </Button>
                    </SearchContainer>
                    <SearchContainer>
                        <Button
                            className="butt"
                            variant="outlined"
                            startIcon={
                                <LocalAtmOutlinedIcon
                                    style={{
                                        color: 'white',

                                        display: 'block',
                                        height: '40px',
                                        width: '40px',
                                        'border-radius': '50%',
                                        border: '1px solid blue',
                                        backgroundColor: 'blue',
                                    }}
                                />
                            }
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        color: 'blue',

                                        display: 'block',
                                        height: '20px',
                                        width: '20px',
                                    }}
                                />
                            }
                        >
                            <Link to="/dashboard">
                                Send Professional invoices
                            </Link>
                        </Button>
                    </SearchContainer>
                </Right>
            </Wrapper>
        </Conatainer>
    )
}

export default GetStarted2
