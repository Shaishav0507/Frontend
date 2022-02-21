import React from 'react'
// import StepperForm from './StepperForm'
import { PaginationTable } from './../tables/PaginationTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { InvoicesForm } from './InvoicesForm'
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

const AppForm = () => {
    return (
        <Container>

           <SimpleCard title="Create Invoice">
              <InvoicesForm />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Current Invoices">
            <PaginationTable />
            </SimpleCard> 
        </Container>
    )
}

export default AppForm
