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
        Name: 'Hello',
        Address: '13123 Gurgaon',
        GST_No: 'Shai05',
        Email: 'abc@gmail.com',
        Pan: 'Dgewt2345j',
        Contact: '99992386342',
        Bank: '1235324234',
    },
]

const VendorTable = () => {
    return (
        <Box width="100%" overflow="auto">
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>GST No.</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>PAN No.</TableCell>
                        <TableCell>Contact</TableCell>
                        <TableCell>Bank</TableCell>
                        <TableCell>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {subscribarList.map((subscriber, index) => (
                        <TableRow key={index}>
                            <TableCell align="left">
                                {subscriber.Name}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.Address}
                            </TableCell>
                            <TableCell align="left">
                                {subscriber.GST_No}
                            </TableCell>
                            <TableCell>{subscriber.Email}</TableCell>
                            <TableCell>{subscriber.Pan}</TableCell>
                            <TableCell>{subscriber.Contact}</TableCell>
                            <TableCell>{subscriber.Bank}</TableCell>
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

export default VendorTable
