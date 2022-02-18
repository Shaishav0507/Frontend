import { Table } from 'react-bootstrap'
import React, { Component } from 'react'

export class start extends Component {
    constructor(props) {
        super(props)
        this.state = { deps: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'api/start')
            .then((response) => response.json())
            .then((data) => {
                this.setState({ deps: data })
            })
    }

    componentDidMount() {
        this.refreshList()
    }

    componentDidUpdate() {
        this.refreshList()
    }

    render() {
        const { deps } = this.state
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
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
                                <td>{dep.fname}</td>
                                <td>{dep.lname}</td>
                                <td>{dep.business}</td>
                                <td>{dep.address}</td>
                                <td>{dep.state}</td>
                                <td>{dep.code}</td>
                                <td>Edit/Delete</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        )
    }
}
