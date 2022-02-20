import React, { Component } from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Icon,
} from '@mui/material'
import { Box, styled } from '@mui/system'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { EditInvoice } from './EditInvoice'

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
                whiteSpace: "nowrap",
                overflow: "auto",
                // textOverflow: "ellipsis",
                textTransform: 'capitalize',
            },
        },
    },
}))

export class PaginationTable extends Component {
    constructor(props) {
        super(props)
        this.state = { deps: [], addStartShow: false, editStartShow: false }
    }

    refreshList() {
        fetch('http://localhost:8000/invoice/')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }
    deleteDep(VendorId) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:8000/invoice/' + VendorId, {
                method: 'DELETE',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            window.location.reload(true)
        }
    }

    render() {
        const {
            deps,
            Id,
            name,
            ino,
            idate,
            payment,
            amount,
           
        } = this.state
        //    let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })

        return (
            <Box width="100%" overflow="auto">
                <StyledTable style={{tableLayout: "fixed", whiteSpace: "pre"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell>InvoiceId</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Invoice No</TableCell>
                            <TableCell>Invoice Date</TableCell>
                            <TableCell>Payment Date</TableCell>
                            <TableCell>Amount</TableCell>
                            <TableCell>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deps.map((dep) => (
                            <TableRow key={dep.InvoiceId}>
                                <TableCell>{dep.InvoiceId}</TableCell>
                                <TableCell>{dep.Name}</TableCell>
                                <TableCell>{dep.Invoice_no}</TableCell>
                                <TableCell>{dep.Invoice_Date}</TableCell>
                                <TableCell>{dep.Payment_Date}</TableCell>
                                <TableCell>{dep.Amount}</TableCell>
                                
                                <TableCell>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="info"
                                            onClick={() =>
                                                this.setState({
                                                    editStartShow: true,
                                                    Id: dep.InvoiceId,
                                                    name: dep.Name,
                                                    ino: dep.Invoice_no,
                                                    idate: dep.Invoice_Date,
                                                    payment: dep.Payment_Date,
                                                    amount: dep.Amount,
                                                    
                                                })
                                            }
                                        >
                                            <Icon>edit</Icon>
                                        </Button>

                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteDep(dep.InvoiceId)
                                            }
                                        >
                                            <Icon>delete</Icon>
                                        </Button>

                                        <EditInvoice
                                            show={this.state.editStartShow}
                                            onHide={editStartClose}
                                            Id={Id}
                                            name={name}
                                            ino={ino}
                                            idate={idate}
                                            payment={payment}
                                            amount={amount}
                                           
                                        />
                                    </ButtonToolbar>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </StyledTable>
            </Box>
        )
    }
}
