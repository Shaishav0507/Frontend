import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export class EditInvoice extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/invoice/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                InvoiceId: event.target.InvoiceId.value,
                Name: event.target.Name.value,
                Invoice_no: event.target.Invoice_no.value,
                Invoice_Date: event.target.Invoice_Date.value,
                Payment_Date: event.target.Payment_Date.value,
                Amount: event.target.Amount.value,
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
                                <Form.Group controlId="InvoiceId">
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
                                    <Form.Group controlId="Invoice_no">
                                        <Form.Label>Invoice No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Invoice_no"
                                            required
                                            defaultValue={this.props.ino}
                                            placeholder="Invoice No."
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Inoice_Date">
                                        <Form.Label>Invoice Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="Invoice_Date"
                                            required
                                            defaultValue={this.props.idate}
                                            placeholder="Invoice Date"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Payment_Date">
                                        <Form.Label>Payment Date</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="Payment_Date"
                                            required
                                            defaultValue={this.props.payment}
                                            placeholder="Payment_Date"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Amount">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="number"
                                            name="Amount"
                                            required
                                            defaultValue={this.props.amount}
                                            placeholder="Amount"
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
