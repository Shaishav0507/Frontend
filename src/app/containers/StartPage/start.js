import { Table } from 'react-bootstrap'
import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Addstart } from './Addstart'
import { Editstart } from './Editstart'

export class start extends Component {
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
        let addStartClose = () => this.setState({ addStartShow: false })
        let editStartClose = () => this.setState({ editStartShow: false })
        return (
            <div style={{ backgroundColor: '#B4CFB0', height: '100vh' }}>
                <ButtonToolbar>
                    <Button
                        style={{
                            top: '0',
                            right: '40px',
                            position: 'absolute',
                            marginTop: '20px',
                            marginRight: '40px',
                        }}
                        variant="danger"
                        onClick={() => this.setState({ addStartShow: true })}
                    >
                        Add Button
                    </Button>
                    <Addstart
                        show={this.state.addStartShow}
                        onHide={addStartClose}
                    />
                </ButtonToolbar>
                <Table
                    // className="mt-4"
                    variant="dark"
                    striped
                    bordered
                    hover
                    style={{
                        // position: 'absolute',
                        marginLeft: '60px',

                        marginTop: '80px',
                        width: '90%',
                    }}
                >
                    <thead>
                        <tr style={{ textAlign: 'center' }}>
                            <th>Sr. No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Business Name</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>State Code</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {deps.map((dep) => (
                            <tr key={dep.id}>
                                <td>{dep.id}</td>
                                <td>{dep.fname}</td>
                                <td>{dep.lname}</td>
                                <td>{dep.business}</td>
                                <td>{dep.address}</td>
                                <td>{dep.state}</td>
                                <td>{dep.code}</td>
                                <td>
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
                                            Edit
                                        </Button>

                                        <Button
                                            className="mr-2"
                                            variant="danger"
                                            onClick={() =>
                                                this.deleteDep(dep.id)
                                            }
                                        >
                                            Delete
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
