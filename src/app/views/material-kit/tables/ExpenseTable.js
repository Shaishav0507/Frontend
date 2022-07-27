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
import { EditExpense } from './EditExpense'
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

export class ExpenseTable extends Component {
    constructor(props) {
        super(props)
        this.state = { deps: [], addStartShow: false, editStartShow: false }
    }

    refreshList() {
        fetch(`${process.env.REACT_APP_API_URL}/expense/`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }
    deleteDep(ExpenseId) {
        if (window.confirm('Are you sure?')) {
            fetch(`${process.env.REACT_APP_API_URL}/expense/` + ExpenseId, {
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
            cate,
            amount,
        } = this.state
        //    let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })

        return (
            <Box width="100%" overflow="auto">
                <StyledTable style={{tableLayout: "fixed", whiteSpace: "pre"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "150px"}}>ExpenseId</TableCell>
                            <TableCell style={{width: "25%"}}>Category</TableCell>
                            <TableCell style={{width: "25%"}}>Amount</TableCell>
                            <TableCell>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deps.map((dep) => (
                            <TableRow key={dep.ExpenseId}>
                                <TableCell>{dep.ExpenseId}</TableCell>
                                <TableCell>{dep.Category}</TableCell>
                                <TableCell>{dep.Amount}</TableCell>
                                <TableCell>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="info"
                                            onClick={() =>
                                                this.setState({
                                                    editStartShow: true,
                                                    Id: dep.ExpenseId,
                                                    cate: dep.Category,
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
                                                this.deleteDep(dep.ExpenseId)
                                            }
                                        >
                                            <Icon>delete</Icon>
                                        </Button>

                                        <EditExpense
                                            show={this.state.editStartShow}
                                            onHide={editStartClose}
                                            Id={Id}
                                            cate={cate}
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
