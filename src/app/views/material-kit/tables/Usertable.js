import React, { Component } from 'react'
import {
    Table,
    TableHead,
    TableCell,
    TableBody,
    TableRow,
    Icon,
    TablePagination,
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
        this.state = {
            deps: [],
            addStartShow: false,
            editStartShow: false,
            rowsPerPage: 5,
            page: 0,
        }
    }

    refreshList() {
        fetch(`${process.env.REACT_APP_API_URL}/api/start/`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }
    deleteDep(StartId) {
        if (window.confirm('Are you sure?')) {
            fetch(`${process.env.REACT_APP_API_URL}/api/start/` + StartId, {
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

        const handleChangePage = (event, newPage) => {
            this.setPage(newPage)
        }

        const handleChangeRowsPerPage = (event) => {
            this.setRowsPerPage(+event.target.value)
            this.setPage(0)
        }
        //    let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })

        return (
            <>
                <Box width="100%" overflow="auto">
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
                                <TableRow key={dep.StartId}>
                                    <TableCell>{dep.StartId}</TableCell>
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
                                                        id: dep.StartId,
                                                        stfname: dep.fname,
                                                        stlname: dep.lname,
                                                        stbusiness:
                                                            dep.business,
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
                                                    this.deleteDep(dep.StartId)
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
                <TablePagination
                    sx={{ px: 2 }}
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={deps.length}
                    rowsPerPage={this.rowsPerPage}
                    style={{display: 'none'}}
                    page={this.page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </>
        )
    }
}
