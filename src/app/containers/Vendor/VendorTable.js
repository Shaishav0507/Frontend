import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import { Button, ButtonToolbar } from 'react-bootstrap'
// import { SimpleForm } from './../forms/SimpleForm';
import { EditVendor } from './EditVendor'

export class VendorTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vend: [],
            // addModalShow:false,
            editModalShow: false,
        }
    }

    refreshList() {
        fetch('http://localhost:8000/vendor/')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ vend: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }

    deleteVen(VendorId) {
        if (window.confirm('Are you sure?')) {
            fetch('http://localhost:8000/vendor/' + VendorId, {
                method: 'DELETE',
                header: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            })
        }
    }
    render() {
        const { vend, venid, venname, add, gst, email, pan, contact, acc } = this.state
        let editModalClose = () => this.setState({ editModalShow: false })
        //let addModalClose=()=>this.setState({addModalShow:false});
        return (
            <div style={{ backgroundColor: '#B4CFB0', height: '100vh' }}>
                <ButtonToolbar>
                    <Button
                        variant="primary"
                        onClick={() => this.setState({ addModalShow: true })}
                    >
                        Add Customer
                    </Button>

                    {/* <SimpleForm show={this.state.addModalShow}
                    onHide={addModalClose}/> */}
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
                            <th>VendorId</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>GST No.</th>
                            <th>Email</th>
                            <th>PAN No.</th>
                            <th>Contact</th>
                            <th>Account No.</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {vend.map((ven) => (
                            <tr key={ven.VendorId}>
                                <td>{ven.VendorId}</td>
                                <td>{ven.Name}</td>
                                <td>{ven.Address}</td>
                                <td>{ven.GST}</td>
                                <td>{ven.Email}</td>
                                <td>{ven.Pan}</td>
                                <td>{ven.Contact}</td>
                                <td>{ven.Bank}</td>
                                <td>
                                    <ButtonToolbar>
                                        <Button
                                            className="mr-2"
                                            variant="info"
                                            onClick={() =>
                                                this.setState({
                                                    editModalShow: true,
                                                    venid: ven.VendorId,
                                                    venname: ven.Name,
                                                    add: ven.Address,
                                                    gst: ven.GST,
                                                    email: ven.Email,
                                                    pan: ven.Pan,
                                                    contact: ven.Contact,
                                                    acc: ven.Bank,
                                                })
                                            }
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteVen(vend.VendorId)
                                            }
                                        >
                                            Delete
                                        </Button>
                                        <EditVendor
                                            show={this.state.editModalShow}
                                            onHide={editModalClose}
                                            venid={venid}
                                            venname={venname}
                                            add={add}
                                            gst={gst}
                                            email={email}
                                            pan={pan}
                                            contact={contact}
                                            acc={acc}
                                        />
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
