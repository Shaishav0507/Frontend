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
import { EditEstimate } from './EditEstimate'
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

export class EstimateTable extends Component {
    constructor(props) {
        super(props)
        this.state = { deps: [], addStartShow: false, editStartShow: false }
    }

    refreshList() {
        fetch(`${process.env.REACT_APP_API_URL}/estimate/`)
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }
    deleteDep(EstimateId) {
        if (window.confirm('Are you sure?')) {
            fetch(`${process.env.REACT_APP_API_URL}/estimate/` + EstimateId, {
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
            no,
            create,
            update,
            item,
            price,
        } = this.state
        //    let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })

        return (
            <Box width="100%" overflow="auto">
                <StyledTable style={{tableLayout: "fixed", whiteSpace: "pre"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{width: "80px"}}>EstimateId</TableCell>
                            <TableCell style={{width: "12%"}}>EstimateNo</TableCell>
                            <TableCell style={{width: "12%"}}>Create</TableCell>
                            <TableCell style={{width: "120px"}}>Update</TableCell>
                            <TableCell style={{width: "16%"}}>Item</TableCell>
                            <TableCell style={{width: "110px"}}>Price</TableCell>
                            <TableCell>Options</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {deps.map((dep) => (
                            <TableRow key={dep.EstimateId}>
                                <TableCell>{dep.EstimateId}</TableCell>
                                <TableCell>{dep.EstimateNo}</TableCell>
                                <TableCell>{dep.Create}</TableCell>
                                <TableCell>{dep.Update}</TableCell>
                                <TableCell>{dep.Item}</TableCell>
                                <TableCell>{dep.Price}</TableCell>
                                <TableCell>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="info"
                                            onClick={() =>
                                                this.setState({
                                                    editStartShow: true,
                                                    Id: dep.EstimateId,
                                                    no: dep.EstimateNo,
                                                    create: dep.Create,
                                                    update: dep.Update,
                                                    item: dep.Item,
                                                    price: dep.Price,
                                                })
                                            }
                                        >
                                            <Icon>edit</Icon>
                                        </Button>

                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteDep(dep.EstimateId)
                                            }
                                        >
                                            <Icon>delete</Icon>
                                        </Button>

                                        <EditEstimate
                                            show={this.state.editStartShow}
                                            onHide={editStartClose}
                                            Id={Id}
                                            no={no}
                                            create={create}
                                            update={update}
                                            item={item}
                                            price={price}
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
