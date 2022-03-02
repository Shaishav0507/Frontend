import React from 'react'
import { SimpleCard } from 'app/components'
import { Box, styled } from '@mui/system'
import { Usersform } from './Usersform'
import { Usertable } from '../tables/Usertable'
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

const Addstart = () => {
    return (
        <Container>
            <SimpleCard title="Create User">
                <Usersform />
            </SimpleCard>
            <Box py="12px" />
            <SimpleCard title="Current Users">
                <Usertable />
            </SimpleCard>
        </Container>
    )
}

export default Addstart
