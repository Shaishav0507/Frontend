import React from 'react'
import Tax from './tax.png'
import styled from 'styled-components'
import { Component } from 'react'
import { Form } from 'react-bootstrap'
import { ValidatorForm } from 'react-material-ui-form-validator'
import { Button, Icon} from '@mui/material'
import { Link } from 'react-router-dom-old/cjs/react-router-dom.min'

const Conatainer = styled.div`
    background: linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff 35%,
        #99ebff 65%,
        #1a1aff 100%
    );
    height: 100vh;
    padding: 20px;
    padding-left: 150px;
    padding-top: 60px;
`

export class GetStarted1 extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    
    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/api/start/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                StartId: null,
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
                    window.location="/onboarding";
                },
                (error) => {
                    alert('Failed')
                    
                }
            )
    }

    render() {
        return (
            <Conatainer>
                <img
                    src={Tax}
                    alt="Tax_Image"
                    style={{
                        float: 'right',
                        width: '550px',
                        height: '500px',
                        marginTop: '20px',
                        marginRight: '150px',
                    }}
                />
                <h1>Welcome to TaxRx !!</h1>
                <p>Send the Invoice or File GST Return</p>

                <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={() => null}
                    {...this.props}
                >
                    <div className=" d-flex">
                        <Form.Group controlId="fname">
                            <Form.Control
                                //  className=" mb-2 p-2"
                                style={{
                                    width: '80%',
                                    marginBottom: '16px',
                                    borderRadius: '20px',
                                    marginTop: '5px',
                                }}
                                size="lg"
                                type="text"
                                placeholder="First Name"
                                name="Name"
                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="lname">
                            <Form.Control
                                style={{
                                    width: '80%',
                                    marginBottom: '16px',
                                    // marginLeft: '5px',
                                    borderRadius: '20px',
                                    marginTop: '5px',
                                }}
                                size="lg"
                                type="text"
                                placeholder="Last Name"
                                name="Name"
                                required
                            />
                        </Form.Group>
                    </div>
                    <Form.Group
                        controlId="business"
                        className="d-flex  flex-column"
                    >
                        <Form.Label>What's your business name?</Form.Label>
                        <Form.Control
                            style={{
                                width: '70%',
                                marginBottom: '16px',
                                borderRadius: '20px',
                            }}
                            size="lg"
                            type="text"
                            placeholder="Bussiness !!"
                            name="Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        controlId="address"
                        className="d-flex  flex-column"
                    >
                        <Form.Label>What's your Office Address</Form.Label>
                        <Form.Control
                            style={{
                                width: '70%',
                                marginBottom: '16px',
                                borderRadius: '20px',
                            }}
                            size="lg"
                            type="text"
                            placeholder="Address !!"
                            name="Name"
                            required
                        />
                    </Form.Group>

                    <Form.Group controlId="state">
                        <Form.Label>What's your State Name</Form.Label>
                        <div className=" d-flex flex-column">
                            <select
                                class="form-select form-select-lg p-2"
                                aria-label="form-select-lg example"
                                style={{
                                    width: '70%',
                                    marginBottom: '10px',
                                    color: 'gray',
                                    borderRadius: '20px',
                                }}
                                name="state"
                                required
                            >
                                <option value="AN">
                                    Andaman and Nicobar Islands
                                </option>
                                <option value="AP">Andhra Pradesh</option>
                                <option value="AR">Arunachal Pradesh</option>
                                <option value="AS">Assam</option>
                                <option value="BR">Bihar</option>
                                <option value="CH">Chandigarh</option>
                                <option value="CT">Chhattisgarh</option>
                                <option value="DN">
                                    Dadra and Nagar Haveli
                                </option>
                                <option value="DD">Daman and Diu</option>
                                <option value="DL" selected>
                                    Delhi
                                </option>
                                <option value="GA">Goa</option>
                                <option value="GJ">Gujarat</option>
                                <option value="HR">Haryana</option>
                                <option value="HP">Himachal Pradesh</option>
                                <option value="JK">Jammu and Kashmir</option>
                                <option value="JH">Jharkhand</option>
                                <option value="KA">Karnataka</option>
                                <option value="KL">Kerala</option>
                                <option value="LA">Ladakh</option>
                                <option value="LD">Lakshadweep</option>
                                <option value="MP">Madhya Pradesh</option>
                                <option value="MH">Maharashtra</option>
                                <option value="MN">Manipur</option>
                                <option value="ML">Meghalaya</option>
                                <option value="MZ">Mizoram</option>
                                <option value="NL">Nagaland</option>
                                <option value="OR">Odisha</option>
                                <option value="PY">Puducherry</option>
                                <option value="PB">Punjab</option>
                                <option value="RJ">Rajasthan</option>
                                <option value="SK">Sikkim</option>
                                <option value="TN">Tamil Nadu</option>
                                <option value="TG">Telangana</option>
                                <option value="TR">Tripura</option>
                                <option value="UP">Uttar Pradesh</option>
                                <option value="UT">Uttarakhand</option>
                                <option value="WB">West Bengal</option>
                            </select>
                        </div>
                    </Form.Group>
                    <Form.Group
                        controlId="code"
                        className=" d-flex flex-column"
                    >
                        <Form.Label>What's your State Code</Form.Label>
                        <Form.Control
                            style={{
                                width: '70%',
                                marginBottom: '16px',
                                borderRadius: '20px',
                            }}
                            size="lg"
                            type="text"
                            placeholder="State Code !!"
                            name="Name"
                            required
                        />
                    </Form.Group>
                    
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        
                        style={{
                            marginTop: '20px',
                            borderRadius: '50px 50px',
                            width: '300px',
                            marginLeft: '30px'
                        }}
                    >
                        Next
                        </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        style={{
                            marginTop: '20px',
                            borderRadius: '50px 50px',
                            width: '10px',
                            marginLeft: '30px'
                        }}

                    >   
                        <Link to="/onboarding"><Icon style={{ color:'white', textDecoration: 'none'}}>arrow_right_alt</Icon></Link>
                        </Button>    
                </ValidatorForm>
            </Conatainer>
        )
    }
}
