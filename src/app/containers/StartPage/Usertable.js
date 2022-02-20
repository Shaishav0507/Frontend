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
import { Editstart } from './Editstart'
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
                textTransform: 'capitalize',
            },
        },
    },
}))

export class Usertable extends Component {
    constructor(props) {
        super(props)
        this.state = { deps: [], addStartShow: false, editStartShow: false }
    }

    refreshList() {
        fetch('http://localhost:8000/api/start/')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }
    deleteDep(id) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:8000/api/start/' + id, {
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
            id,
            stfname,
            stlname,
            stbusiness,
            staddress,
            ststate,
            stcode,
        } = this.state
        //    let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })

        return (
            <Box width="120%" overflow="auto">
                <StyledTable>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Bussiness</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>State Code</TableCell>
                            <TableCell>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deps.map((dep) => (
                            <TableRow key={dep.id}>
                                <TableCell>{dep.id}</TableCell>
                                <TableCell>{dep.fname}</TableCell>
                                <TableCell>{dep.lname}</TableCell>
                                <TableCell>{dep.business}</TableCell>
                                <TableCell>{dep.address}</TableCell>
                                <TableCell>{dep.state}</TableCell>
                                <TableCell>{dep.code}</TableCell>
                                <TableCell>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="info"
                                            onClick={() =>
                                                this.setState({
                                                    editStartShow: true,
                                                    id: dep.id,
                                                    stfname: dep.fname,
                                                    stlname: dep.lname,
                                                    stbusiness: dep.business,
                                                    staddress: dep.address,
                                                    ststate: dep.state,
                                                    stcode: dep.code,
                                                })
                                            }
                                        >
                                            <Icon>edit</Icon>
                                        </Button>

                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteDep(dep.id)
                                            }
                                        >
                                            <Icon>delete</Icon>
                                        </Button>

                                        <Editstart
                                            show={this.state.editStartShow}
                                            onHide={editStartClose}
                                            id={id}
                                            stfname={stfname}
                                            stlname={stlname}
                                            stbusiness={stbusiness}
                                            staddress={staddress}
                                            ststate={ststate}
                                            stcode={stcode}
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
