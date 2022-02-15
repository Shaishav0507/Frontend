import React from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    IconButton,
    Icon,
    TableRow,
} from '@mui/material'
import { Box, styled } from '@mui/system'

const StyledTable = styled(Table)(({ theme }) => ({
    whiteSpace: 'pre',
    '& thead': {
        '& tr': {
            '& th': {
                paddingLeft: 0,
                paddingRight: 0,
            },
        },
    },
    '& tbody': {
        '& tr': {
            '& td': {
                paddingLeft: 0,
                textTransform: 'capitalize',
            },
        },
    },
}))

const subscribarList = [
    {
        Image: 'Hello',
        Name: 'Shaishav',
        Invoice_no: 1000,
        InvociceDate: '05-07-2000',
        PaymentDate: '05-07-2000',
        Amount:100,
    },
]

const SimpleTable = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Invoice Number</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Invoice Date</TableCell>
                        <TableCell>Payment Date</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.Image}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.Name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.Invoice_no}
                            </TableCell>
                            <TableCell>{subscriber.Amount}</TableCell>
                            <TableCell>{subscriber.InvociceDate}</TableCell>
                            <TableCell>${subscriber.PaymentDate}</TableCell>
                            <TableCell>
                                <IconButton>
                                    <Icon color="error">close</Icon>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </StyledTable>
        </Box>
    )
}

export default SimpleTable
