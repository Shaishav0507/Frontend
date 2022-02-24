import {
    Button,
    Icon,
    Grid,
    FormControlLabel,
    Checkbox,
} from '@mui/material'
import { Span } from 'app/components/Typography'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { ValidatorForm} from 'react-material-ui-form-validator'

export class GSTForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/customer/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                CustomerId: null,
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
                    alert(result)
                    window.location.reload(true)
                },
                (error) => {
                    alert('Failed')
                }
            )
    }

    render() {
        // const handleFileUpload = () => {}
        return (
            <div>
                <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={() => null}
                    {...this.props}
                >
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={4} sm={12} xs={12} sx={{ mt: 2 }}>
                            <Form.Group controlId="Name">
                                <Form.Control
                                    //  className=" mb-2 p-2"
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Name"
                                    name="Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="Address">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Address"
                                    name="Address"
                                />
                                
                            </Form.Group>
                            <Form.Group controlId="GST">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="GST"
                                    name="GST"
                                />
                                
                            </Form.Group>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="I have read and agree to the terms of service."
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <Form.Group controlId="Email">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Email"
                                    name="Email"
                                />
                                
                            </Form.Group>
                            
                            <Form.Group controlId="Pan">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="PAN No."
                                    name="Pan"
                                />
                                
                            </Form.Group>
                            <Form.Group controlId="Contact">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Contact"
                                    name="Contact"
                                />
                                
                            </Form.Group>
                            <Form.Group controlId="Bank">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Account Number"
                                    name="Banks"
                                />
                                
                            </Form.Group>
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                
                    >
                        <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Add Customer
                        </Span>
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}
