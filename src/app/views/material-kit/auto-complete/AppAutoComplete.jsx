import React from 'react'
import { SimpleCard } from 'app/components'
import { AutocompleteCombo } from './AutocompleteCombo'
import { ExpenseTable } from '../tables/ExpenseTable'
import { Box, styled } from '@mui/system'

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

const AppAutoComplete = () => {
    return (
        <Container>
            <SimpleCard title="Expenses">
                <AutocompleteCombo />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Expense Table">
                <ExpenseTable />
            </SimpleCard>
        </Container>
    )
}

export default AppAutoComplete
