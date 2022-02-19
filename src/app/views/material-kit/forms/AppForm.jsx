import React from 'react'
// import StepperForm from './StepperForm'
import { PaginationTable } from './../tables/PaginationTable'
import { SimpleCard } from 'app/components'
import { styled } from '@mui/system'
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
            {/* <div className="breadcrumb">
                <Breadcrumb
                    routeSegments={[
                        { name: 'Material', path: '/material' },
                        { name: 'Form' },
                    ]}
                />
            </div> */}
            {/* <SimpleCard>
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    style={{
                        borderRadius: '15px',
                        position: 'relative',
                        left: '980px',
                    }}
                >
                    <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Create a Invoice
                        </Span>
                </Button>
            </SimpleCard>
            <Box py="12px" /> */}
            <SimpleCard>
                <PaginationTable />
            </SimpleCard>
        </Container>
    )
}

export default AppForm
