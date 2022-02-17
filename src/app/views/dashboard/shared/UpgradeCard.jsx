import React from 'react'
import { Card } from '@mui/material'
import { styled } from '@mui/system'
import { convertHexToRGB } from 'utils'
import { Link } from 'react-router-dom'

const CardRoot = styled(Card)(({ theme }) => ({
    marginBottom: '24px',
    padding: '24px !important',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '16px !important',
    },
}))

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'left',
    position: 'relative',
    background: `rgb(${convertHexToRGB(
        theme.palette.primary.main
    )}, 0.15) !important`,
    padding: '18px !important',
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const Paragraph = styled('p')(({ theme }) => ({
    margin: 0,
    paddingTop: '5px',
    paddingBottom: '5px',
    alignItems: 'left   ',
    color: theme.palette.text.secondary,
}))

const UpgradeCard = () => {
    return (
        <CardRoot>
            <h2>
                THINGS YOU CAN DO
            </h2>
            <StyledCard elevation={0}>
                <Paragraph style={{fontSize: '20px'}}>
                    <ul>
                        <li style={{ listStyleType: 'none', paddingBottom:'5px'}}>
                        <Link to="/invoices">Add a Invocie.</Link> 
                        </li>
                        <li style={{ listStyleType: 'none', paddingBottom:'5px' }}>
                        <Link to="/customers">Add a Customer</Link> 
                        </li>
                        <li style={{ listStyleType: 'none', paddingBottom:'5px' }}>
                        <Link to="/invoices">Customize your Invoices</Link> 
                        </li>
                        <li style={{ listStyleType: 'none'}}>
                        <Link to="/invoices">Invite a guest collaborator</Link> 
                        </li>
                    </ul>
                </Paragraph>
            </StyledCard>
        </CardRoot>
    )
}

export default UpgradeCard
