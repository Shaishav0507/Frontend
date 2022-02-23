import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export class EditExpense extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/expense/', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ExpenseId: event.target.ExpenseId.value,
                Category: event.target.Category.value,
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
                                <Form.Group controlId="ExpenseId">
                                        <Form.Label>Sr. No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            defaultValue={this.props.Id}
                                            placeholder="ID"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Category">
                                        <Form.Label>Category</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="category"
                                            required
                                            defaultValue={this.props.cate}
                                            placeholder="Category"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Amount">
                                        <Form.Label>Amount</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Amount"
                                            required
                                            defaultValue={this.props.amount}
                                            placeholder="Amount"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit" style={{ marginTop: '10px' }}>
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
