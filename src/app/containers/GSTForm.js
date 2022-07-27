import { Button, Icon, Grid, FormControlLabel, Checkbox, Container } from '@mui/material'
import SimpleCard from 'app/components/cards/SimpleCard'
import { Span } from 'app/components/Typography'
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import { ValidatorForm } from 'react-material-ui-form-validator'

export class GSTForm extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch(`${process.env.REACT_APP_API_URL}/gst/`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                GSTId: null,
                Fname: event.target.Fname.value,
                Lname: event.target.Lname.value,
                GSTNo: event.target.GSTNo.value,
                Email: event.target.Email.value,
                Phone: event.target.Phone.value,
                Address: event.target.Address.value,
                State: event.target.State.value,
                Code: event.target.Code.value,
                Account: event.target.Account.value,
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
            <Container style={{ marginTop: '50px' }}>
                <SimpleCard ><span style={{ fontSize: '20px', fontWeight: 'bold', marginLeft: '20px' }}>GST REGISTRATION</span>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={() => null}
                        {...this.props}
                    >
                        <Grid container spacing={5}>
                            <Grid
                                item
                                lg={6}
                                md={10}
                                sm={2}
                                xs={20}
                                sx={{ mt: 2 }}
                            >
                                <Form.Group controlId="Fname">
                                    <Form.Control
                                        //  className=" mb-2 p-2"
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            marginLeft: '50px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="First Name"
                                        name="Fname"
                                    />
                                </Form.Group>

                                <Form.Group controlId="GSTNo">
                                    <Form.Control
                                        //  className=" mb-2 p-2"
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            marginLeft: '50px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Gst No"
                                        name="Gst no"
                                    />
                                </Form.Group>

                                <Form.Group controlId="Phone">
                                    <Form.Control
                                        //  className=" mb-2 p-2"
                                        style={{
                                            width: '70%',
                                            borderRadius: '15px',
                                            marginLeft: '50px',
                                            marginBottom: '16px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Phone Number"
                                        name="Phone"
                                    />
                                </Form.Group>

                                <Form.Group controlId="State">
                                    <Form.Control
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            marginLeft: '50px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="State"
                                        name="State"
                                    />
                                </Form.Group>

                                <Form.Group controlId="Account">
                                    <Form.Control
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            marginLeft: '50px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Account Number"
                                        name="Account"
                                    />
                                </Form.Group>
                                <FormControlLabel
                                    style={{marginLeft: '50px',}}
                                    control={<Checkbox />}
                                    label="I have read and agree to the terms of service."
                                />
                            </Grid>

                            <Grid
                                item
                                lg={6}
                                md={6}
                                sm={12}
                                xs={12}
                                sx={{ mt: 2 }}
                            >
                                <Form.Group controlId="Lname">
                                    <Form.Control
                                        //  className=" mb-2 p-2"
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Last Name"
                                        name="Lname"
                                    />
                                </Form.Group>

                                <Form.Group controlId="Email">
                                    <Form.Control
                                        //  className=" mb-2 p-2"
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Email"
                                        name="email"
                                    />
                                </Form.Group>
                                <Form.Group controlId="Address">
                                    <Form.Control
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Address"
                                        name="Address"
                                    />
                                </Form.Group>
                                <Form.Group controlId="Code">
                                    <Form.Control
                                        style={{
                                            width: '70%',
                                            marginBottom: '16px',
                                            borderRadius: '15px'
                                        }}
                                        size="lg"
                                        type="text"
                                        placeholder="Pin Code"
                                        name="Code"
                                    />
                                </Form.Group>
                            </Grid>
                        </Grid>
                        <Button
                            color="primary"
                            style={{marginLeft: '50px', borderRadius: '15px'}}
                            variant="contained"
                            type="submit"
                        >
                            <Icon>add</Icon>
                            <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                                Proceed to Payments
                            </Span>
                        </Button>
                    </ValidatorForm>
                </SimpleCard>
            </Container>
        )
    }
}
