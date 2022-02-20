import React from 'react'
import { SimpleVendForm } from './SimpleVendForm'
import { VendorTable } from './../tables/VendorTable'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
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

const VendorForm = () => {
    return (
        <Container>
            <SimpleCard title="Create Vendor">
                <SimpleVendForm />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Current Vendors">
                <VendorTable />
            </SimpleCard>
        </Container>
    )
}

export default VendorForm
