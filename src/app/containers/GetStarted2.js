import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import LocalAtmOutlinedIcon from '@mui/icons-material/LocalAtmOutlined'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import styled from 'styled-components'

const Conatainer = styled.div`
    background: linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff 35%,
        #8080ff 65%,
        #1a1aff 100%
    );
    height: 100vh;
    padding: 20px;
    padding-left: 150px;
    padding-top: 60px;
    .butt {
        justify-content: space-between;
        text-decoration: none;
        background-color: white;
        border-radius: 30px;
    }
    .butt:hover {
        background: #ccffff;
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

// function Welcome(props) {
//      return <h1>Hello, {props.name}</h1>
// }

const GetStarted2 = (props) => {
    return (
        <Conatainer>
            <Wrapper>
                <Left>
                    {/* <div>
                        <Welcome name="helol" />
                    </div> */}
                    <h2>Hello, {props.children} </h2>
                    <p style={{ fontSize: '22px', marginTop: '50px' }}>
                        What would you link to do in TaxRx?
                    </p>
                </Left>
                <Right>
                    <h2
                        style={{
                            color: 'whitesmoke',
                            fontSize: '50px',
                            marginBottom: '40px',
                        }}
                    >
                        Choose a starting point{' '}
                    </h2>
                    <p
                        style={{
                            color: 'whitesmoke',
                            fontSize: '30px',
                            marginBottom: '40px',
                        }}
                    >
                        You can do more later
                    </p>
                    <SearchContainer>
                        <Button
                            style={{ outline: 'None' }}
                            className="butt"
                            onClick="window.location.href=window.location.href"
                            type="submit"
                            variant="outlined"
                            startIcon={
                                <LocalAtmOutlinedIcon
                                    style={{
                                        color: 'white',
                                        display: 'block',
                                        height: '40px',
                                        width: '50px',
                                        marginRight: '10px',
                                        'border-radius': '50%',
                                        border: '8px solid blue',
                                        backgroundColor: 'blue',
                                    }}
                                />
                            }
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        color: 'blue',
                                        position: 'relative',
                                        left: '20px',
                                        display: 'block',
                                        height: '20px',
                                        width: '110px',
                                    }}
                                />
                            }
                        >
                            <Link
                                to="/dashboard/default"
                                style={{ textDecoration: 'None' }}
                            >
                                Send Invoices
                            </Link>
                        </Button>
                    </SearchContainer>
                    <SearchContainer>
                        <Button
                            style={{ outline: 'None', marginTop: '20px' }}
                            className="butt"
                            onClick="window.location.href=window.location.href"
                            variant="outlined"
                            startIcon={
                                <LocalAtmOutlinedIcon
                                    style={{
                                        color: 'white',

                                        display: 'block',
                                        height: '40px',
                                        width: '50px',
                                        marginRight: '10px',
                                        'border-radius': '50%',
                                        border: '8px solid blue',
                                        backgroundColor: 'blue',
                                    }}
                                />
                            }
                            endIcon={
                                <ArrowForwardIosIcon
                                    style={{
                                        color: 'blue',
                                        position: 'relative',
                                        left: '15px',
                                        display: 'block',
                                        height: '20px',
                                        width: '100px',
                                    }}
                                />
                            }
                        >
                            <Link
                                to="/dashboard/default"
                                style={{ textDecoration: 'None' }}
                            >
                                File GST Return
                            </Link>
                        </Button>
                    </SearchContainer>
                </Right>
            </Wrapper>
        </Conatainer>
    )
}

export default GetStarted2
