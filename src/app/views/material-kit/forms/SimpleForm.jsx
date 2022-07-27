import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form, Image } from 'react-bootstrap'

export class SimpleForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleFileSelected = this.handleFileSelected.bind(this)
    }

    photoname = 'anonymous.png'
    imagesrc = `${process.env.REACT_APP_API_URL}/media/` + this.photoname

    handleSubmit(event) {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/invoice/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                InvoiceId: null,
                Name: event.target.Name.value,
                Invoice_no: event.target.Invoice_no.value,
                Invoice_Date: event.target.Invoice_Date.value,
                Payment_Date: event.target.Payment_Date.value,
                Amount: event.target.Amount.value,
                Photo: this.photoname,
            }),
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    //alert(result)
                },
                (error) => {
                    //alert('Failed')
                }
            )
    }

    handleFileSelected(event) {
        event.preventDefault()
        this.photoname = event.target.files[0].name
        const formData = new FormData()
        formData.append(
            'myFile',
            event.target.files[0],
            event.target.files[0].name
        )

        fetch(`${process.env.REACT_APP_API_URL}/invoice/SaveFile/`, {
            method: 'POST',
            body: formData,
        })
            .then((res) => res.json())
            .then(
                (result) => {
                    this.imagesrc = `${process.env.REACT_APP_API_URL}/media/` + result
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
                            Add Invoice
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            style={{
                                                width: '190px',
                                                marginRight: '20px',
                                                borderRadius: '15px',
                                            }}
                                            type="text"
                                            name="Name"
                                            required
                                            placeholder="Name"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Invoice_no">
                                        <Form.Label>Invoice_no</Form.Label>
                                        <Form.Control
                                            style={{
                                                width: '190px',
                                                marginRight: '20px',
                                                borderRadius: '15px',
                                            }}
                                            type="text"
                                            name="Invoice_no"
                                            required
                                            placeholder="Invoice_no"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Invoice_Data">
                                        <Form.Label>Invoice_Data</Form.Label>
                                        <Form.Control
                                            style={{
                                                width: '190px',
                                                marginRight: '20px',
                                                borderRadius: '15px',
                                            }}
                                            type="date"
                                            name="Invoice_Data"
                                            required
                                            placeholder="Invoice_Data"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Payment_Data">
                                        <Form.Label>Payment_Data</Form.Label>
                                        <Form.Control
                                            style={{
                                                width: '190px',
                                                marginRight: '20px',
                                                borderRadius: '15px',
                                            }}
                                            type="date"
                                            name="Payment_Data"
                                            required
                                            placeholder="Payment_Data"
                                        />
                                    </Form.Group>

                                    <Form.Group controlId="Amount">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            style={{
                                                width: '190px',
                                                marginRight: '20px',
                                                borderRadius: '15px',
                                            }}
                                            type="text"
                                            name="Amount"
                                            required
                                            placeholder="Amount"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
                                            Add Invoices
                                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>

                            <Col sm={6}>
                                <Image
                                    width="200px"
                                    height="200px"
                                    src={this.imagesrc}
                                />
                                <input
                                    onChange={this.handleFileSelected}
                                    type="File"
                                />
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
