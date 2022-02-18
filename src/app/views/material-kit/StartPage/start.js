import { Table } from '@mui/material';
import React, { Component } from 'react'

export class start extends Component {

    constructor(props){
        super(props);
        this.state={deps:[]}
    }

    refreshList(){
        fetch(process.env.REACT_APP_API)
        .then(response => response.json())
        .then(data => {
            this.setState({deps:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
        const {deps} = this.state;
        return(
            <div>
                <Table className='mt-4' striped bordered hover size='sm'>
                    <thead>
                        <tr>First Name</tr>
                        <tr>Last Name</tr>
                        <tr>Business Name</tr>
                        <tr>Address</tr>
                        <tr>State</tr>
                        <tr>State Code</tr>
                        <tr>Options</tr>
                    </thead>
                    <tbody>
                        {deps.map(dep=>
                            <tr key={dep.id}>
                                <td>{dep.fname}</td>
                                <td>{dep.lname}</td> 
                                <td>{dep.business}</td>
                                <td>{dep.address}</td>
                                <td>{dep.state}</td>
                                <td>{dep.code}</td>
                                <td>Edit/Delete</td>
                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}
