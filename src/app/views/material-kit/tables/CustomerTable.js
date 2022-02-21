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
import { EditCustomer } from './EditCustomer'
import { Button, ButtonToolbar } from 'react-bootstrap'

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

export class CustomerTable extends Component {
    constructor(props) {
        super(props)
        this.state = { deps: [], addStartShow: false, editStartShow: false }
    }

    refreshList() {
        fetch('http://localhost:8000/customer/')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }
    deleteDep(CustomerId) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:8000/customer/' + CustomerId, {
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
            add,
            gst,
            email,
            Pan,
            contact,
            acc,
        } = this.state
        //    let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })

        return (
            <Box width="100%" overflow="auto">
                <StyledTable style={{tableLayout: "fixed", whiteSpace: "pre"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "80px"}}>CustomerId</TableCell>
                            <TableCell style={{width: "12%"}}>Name</TableCell>
                            <TableCell style={{width: "12%"}}>Address</TableCell>
                            <TableCell style={{width: "120px"}}>GST No.</TableCell>
                            <TableCell style={{width: "16%"}}>Email</TableCell>
                            <TableCell style={{width: "110px"}}>PAN</TableCell>
                            <TableCell style={{width: "92px"}}>Contact No.</TableCell>
                            <TableCell>Account No.</TableCell>
                            <TableCell>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deps.map((dep) => (
                            <TableRow key={dep.CustomerId}>
                                <TableCell>{dep.CustomerId}</TableCell>
                                <TableCell>{dep.Name}</TableCell>
                                <TableCell>{dep.Address}</TableCell>
                                <TableCell>{dep.GST}</TableCell>
                                <TableCell>{dep.Email}</TableCell>
                                <TableCell>{dep.Pan}</TableCell>
                                <TableCell>{dep.Contact}</TableCell>
                                <TableCell>{dep.Bank}</TableCell>
                                <TableCell>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="info"
                                            onClick={() =>
                                                this.setState({
                                                    editStartShow: true,
                                                    Id: dep.CustomerId,
                                                    name: dep.Name,
                                                    add: dep.Address,
                                                    gst: dep.GST,
                                                    email: dep.Email,
                                                    Pan: dep.Pan,
                                                    contact: dep.Contact,
                                                    acc:dep.Bank,
                                                })
                                            }
                                        >
                                            <Icon>edit</Icon>
                                        </Button>

                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteDep(dep.CustomerId)
                                            }
                                        >
                                            <Icon>delete</Icon>
                                        </Button>

                                        <EditCustomer
                                            show={this.state.editStartShow}
                                            onHide={editStartClose}
                                            Id={Id}
                                            name={name}
                                            add={add}
                                            gst={gst}
                                            email={email}
                                            Pan={Pan}
                                            contact={contact}
                                            acc={acc}
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
