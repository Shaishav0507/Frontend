import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export class EditEstimate extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/estimate/`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                EstimateId: event.target.EstimateId.value,
                EstimateNo: event.target.EstimateNo.value,
                Create: event.target.Create.value,
                Update: event.target.Update.value,
                Item: event.target.Item.value,
                Price: event.target.Price.value,
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
                                <Form.Group controlId="EstimateId">
                                        <Form.Label>Sr. No.</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="id"
                                            required
                                            defaultValue={this.props.Id}
                                            placeholder="ID"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="EstimateNo">
                                        <Form.Label>EstimateNo</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="EstimateNo"
                                            required
                                            defaultValue={this.props.no}
                                            placeholder="EstimateNo"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Create">
                                        <Form.Label>Create</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="create"
                                            required
                                            defaultValue={this.props.create}
                                            placeholder="Create"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Update">
                                        <Form.Label>Update</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Update"
                                            required
                                            defaultValue={this.props.update}
                                            placeholder="Update"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Item">
                                        <Form.Label>Item</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Item"
                                            required
                                            defaultValue={this.props.item}
                                            placeholder="Item"
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="Price">
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="Price"
                                            required
                                            defaultValue={this.props.price}
                                            placeholder="Price"
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
