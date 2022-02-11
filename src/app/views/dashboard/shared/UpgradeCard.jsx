import React from 'react'
import { Card } from '@mui/material'
import { styled } from '@mui/system'
import { convertHexToRGB } from 'utils'

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
            <h1>
                    THINGS YOU CAN DO
            </h1>
            <StyledCard elevation={0}>
                <Paragraph style={{fontWeight: 'bold', fontSize: '20px'}}>
                    Add a Customer. <br /> Add a Invoice. <br/> Customize your Invoices. <br/> Invite a guest collaborator.
                </Paragraph>
            </StyledCard>
        </CardRoot>
    )
}

export default UpgradeCard
