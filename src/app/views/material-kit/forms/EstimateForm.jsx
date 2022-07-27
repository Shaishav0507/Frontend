import React from 'react'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { SimpleEstiForm } from './SimpleEstiForm'
import { EstimateTable } from '../tables/EstimateTable'
// import { Button, Icon } from '@mui/material'
// import { Span } from 'app/components/Typography'
// import { Link } from 'react-router-dom-old'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    },
}))

const CustomerForm = () => {
    return (
        <Container>
            <SimpleCard title="Create Estimate">
                <SimpleEstiForm />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Current Estimates">
                <EstimateTable />
            </SimpleCard>
        </Container>
    )
}

export default CustomerForm
