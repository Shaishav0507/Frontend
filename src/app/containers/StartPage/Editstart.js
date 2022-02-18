import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export class Editstart extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/api/start/', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: event.target.id.value,
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
                },
                (error) => {
                    alert('Failed')
                }
            )
    }

    render() {
        return (
            <div className="container">
                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Button
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="id">
                                        <Form.Label>Sr. No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            defaultValue={this.props.id}
                                            placeholder="ID"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="fname">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="fame"
                                            required
                                            defaultValue={this.props.stfname}
                                            placeholder="First Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="lname">
                                        <Form.Label>Last Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="lname"
                                            required
                                            defaultValue={this.props.stlname}
                                            placeholder="Last Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="business">
                                        <Form.Label>Business</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="business"
                                            required
                                            defaultValue={this.props.stbusiness}
                                            placeholder="Business"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="address"
                                            required
                                            defaultValue={this.props.staddress}
                                            placeholder="Address"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="state">
                                        <Form.Label>State</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="state"
                                            required
                                            defaultValue={this.props.ststate}
                                            placeholder="State"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="code">
                                        <Form.Label>State Code</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="code"
                                            required
                                            defaultValue={this.props.stcode}
                                            placeholder="State Code"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
