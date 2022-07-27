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

export class SimpleEstiForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/estimate/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                EstimateId: null,
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
                            <Form.Group controlId="EstimateNo">
                                <Form.Control
                                    //  className=" mb-2 p-2"
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="EstimateNo"
                                    name="Name"
                                />
                            </Form.Group>
                            <Form.Group controlId="Create">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Create"
                                    name="Create"
                                />
                                
                            </Form.Group>
                            <Form.Group controlId="Update">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Update"
                                    name="Update"
                                />
                                
                            </Form.Group>
                            <FormControlLabel
                                control={<Checkbox />}
                                label="I have read and agree to the terms of service."
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <Form.Group controlId="Item">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Item"
                                    name="Item"
                                />
                                
                            </Form.Group>
                            
                            <Form.Group controlId="Price">
                                <Form.Control
                                    style={{
                                        width: '100%',
                                        marginBottom: '16px',
                                    }}
                                    size="lg"
                                    type="text"
                                    placeholder="Price"
                                    name="Price"
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
                            Add Estimate
                        </Span>
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}
