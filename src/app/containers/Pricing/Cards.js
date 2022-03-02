import { Button, Card, Icon } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom-old'
import styled from 'styled-components'

const Type = styled.div``
const Money = styled.div``


const Cards = (props) => {

    return (
        <Card
            style={{ height: '300px', width: '900px', marginTop: "25px" }}
            sx={{ px: 2, py: 2, mb: 3 }}
        >
            <dt>
                <Type
                    clasName=""
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '10px',
                    }}
                    aria-label="Tense Biceps"
                >
                    {props.type}
                </Type>
                <Money
                    style={{
                        textAlign: 'center',
                        marginTop: '20px',
                        marginBottom: '10px',
                        fontSize: '20px',
                    }}
                >
                    {props.money}
                </Money>
            </dt>
            <hr />
            <dd>
                <ul style={{ fontSize: '14px', listStyle: 'none' }}>
                    <li>
                        <Icon
                            style={{
                                fontSize: '15px',
                                marginRight: '5px',
                                color: 'blue',
                            }}
                        >
                            verified
                        </Icon>
                        {props.meaning1}{' '}
                    </li>
                    <li>
                        {' '}
                        <Icon
                            style={{
                                fontSize: '15px',
                                marginRight: '5px',
                                color: 'blue',
                            }}
                        >
                            verified
                        </Icon>
                        {props.meaning2}{' '}
                    </li>
                    <li>
                        {' '}
                        <Icon
                            style={{
                                fontSize: '15px',
                                marginRight: '5px',
                                color: 'blue',
                            }}
                        >
                            verified
                        </Icon>
                        {props.meaning3}{' '}
                    </li>
                </ul>
                {/* {props.description} */}
            </dd>

            <Link style={{ textDecoration: 'None' }} to='/pricing'>
            <Button
                variant="contained"
                type="submit"
                style={{
                    marginTop: '20px',
                    borderRadius: '50px 50px',
                    width: '250px',
                    backgroundColor: "darkblue",
                    
                    marginLeft: '30px',
                }}
            >
                Next
            </Button>
            </Link>
        </Card>
    )
}

export default Cards
