import React, { Component } from 'react'
import { Table } from 'react-bootstrap'

import { Button, ButtonToolbar } from 'react-bootstrap'
import { SimpleForm } from './../forms/SimpleForm';

export class PaginationTable extends Component {
    constructor(props) {
        super(props)
        this.state = { emps: [], addModalShow:false }
    }

    refreshList() {
        fetch('http://localhost:8000/invoice/')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ emps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }



    deleteEmp(InvoiceId) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:8000/invoice/' + InvoiceId, {
                method: 'DELETE',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
        }
    }
    render() {
        const { emps } =
            this.state
        let addModalClose=()=>this.setState({addModalShow:false});
        return (
            <div style={{ backgroundColor: '#B4CFB0', height: '100vh' }}>
                <ButtonToolbar>
                    <Button variant='primary'
                    onClick={()=>this.setState({addModalShow:true})}>
                    Add Invoice</Button>

                    <SimpleForm show={this.state.addModalShow}
                    onHide={addModalClose}/>
                </ButtonToolbar>
                <Table
                    variant="dark"
                    striped
                    bordered
                    hover
                    style={{
                        // position: 'absolute',
                        marginLeft: '30px',
                        marginTop: '30px',
                        width: '95%',
                    }}
                >
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th>InvoiceId</th>
                            <th>Name</th>
                            <th>Invoice_No</th>
                            <th>Invoice Date</th>
                            <th>Payment Date</th>
                            <th>Amount Date</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map((emp) => (
                            <tr key={emp.InvoiceId}>
                                <td>{emp.InvoiceId}</td>
                                <td>{emp.Name}</td>
                                <td>{emp.Invoice_no}</td>
                                <td>{emp.Invoice_Date}</td>
                                <td>{emp.Payment_Date}</td>
                                <td>{emp.Amount}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteEmp(emp.InvoiceId)
                                            }
                                        >
                                            Delete
                                        </Button>

                                    </ButtonToolbar>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
