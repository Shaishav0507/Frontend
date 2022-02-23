import { Box } from '@mui/material'
import { SimpleCard } from 'app/components'
import React, { Component } from 'react'
// import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import { Usersform } from './Usersform'
import { Usertable } from './Usertable'

export class Addstart extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/api/start/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                StartId: null,
                fname: event.target.fname.value,
                lname: event.target.lname.value,
                business: event.target.business.value,
                address: event.target.address.value,
                state: event.target.state.value,
                code: event.target.code.value,
            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    alert(result)
                    window.location.reload(true)
                },
                (error) => {
                    alert('Failed')
                }
            )
    }

    render() {
        return (
            <div className="container">
                <SimpleCard title="Users">
                    <Usersform />
                </SimpleCard>
                <Box py="12px" />
                <SimpleCard title="Current Users">
                    <Usertable />
                </SimpleCard>
            </div>
        )
    }
}
