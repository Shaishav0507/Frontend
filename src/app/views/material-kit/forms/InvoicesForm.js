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

export class InvoicesForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
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
                            <Form.Group controlId="Invoice_no">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="InvoiceNo"
                                    name="InvoiceNo"
                                />
                                
                            </Form.Group>
                            <Form.Group controlId="Invoice_Date">
                            <Form.Label>Invoice Date</Form.Label>
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="date"
                                    placeholder="InvoiceDate"
                                    name="InvoiceDate"
                                />
                                
                            </Form.Group>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="I have read and agree to the terms of service."
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <Form.Group controlId="Payment_Date">
                            <Form.Label>Payment Date</Form.Label>
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="date"
                                    placeholder="Payment Date"
                                    name="Payment"
                                />
                                
                            </Form.Group>
                            
                            <Form.Group controlId="Amount">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="number"
                                    placeholder="Amount"
                                    name="Amount"
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
