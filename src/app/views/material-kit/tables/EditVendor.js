import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export class EditVendor extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/vendor/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                VendorId: event.target.VendorId.value,
                Name: event.target.Name.value,
                Address: event.target.Address.value,
                GST: event.target.GST.value,
                Email: event.target.Email.value,
                Pan: event.target.Pan.value,
                Contact: event.target.Contact.value,
                Bank:event.target.Bank.value,
            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    //alert(result)
                    window.location.reload(true)
                },
                (error) => {
                    //alert('Failed')
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
                                <Form.Group controlId="VendorId">
                                        <Form.Label>Sr. No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            defaultValue={this.props.Id}
                                            placeholder="ID"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Name"
                                            required
                                            defaultValue={this.props.name}
                                            placeholder="Name"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Address">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Address"
                                            required
                                            defaultValue={this.props.add}
                                            placeholder="Address"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="GST">
                                        <Form.Label>GST</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="GST"
                                            required
                                            defaultValue={this.props.gst}
                                            placeholder="GST"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            name="Email"
                                            required
                                            defaultValue={this.props.email}
                                            placeholder="Email"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Pan">
                                        <Form.Label>Pan</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Pan"
                                            required
                                            defaultValue={this.props.Pan}
                                            placeholder="Pan"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Contact">
                                        <Form.Label>Contact</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Contact"
                                            required
                                            defaultValue={this.props.contact}
                                            placeholder="Contact"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Bank">
                                        <Form.Label>Bank</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Bank"
                                            required
                                            defaultValue={this.props.acc}
                                            placeholder="Bank"
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
