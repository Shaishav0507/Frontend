import {
    Button,
    Icon,
    Grid,
    FormControlLabel,
    Checkbox,
    // InputAdornment,
    // IconButton,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { Component } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

export class Usersform extends Component {
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
                id: null,
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
                >
                    <Grid container spacing={6}>
                        <Grid item lg={6} md={4} sm={12} xs={12} sx={{ mt: 2 }}>
                            {/* <TextField
                             label="Add a Customer"
                             onChange={handleChange}
                             name="Name"
                             type="file"
                             style={{}}
                             value={Name || ''}
                             validators={['required']}
                             errorMessages={['this field is required']}
                         /> */}

                            <TextField
                                label="First Name"
                                type="text"
                                name="Name"
                                //   value={fname}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />
                            <TextField
                                label="Last Name"
                                type="text"
                                name="gst"
                                //   value={lname || ''}
                            />
                            <TextField
                                label="Bussiness"
                                type="text"
                                name="pan"
                                //   value={pan || ''}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            <FormControlLabel
                                control={<Checkbox />}
                                label="I have read and agree to the terms of service."
                            />
                        </Grid>

                        <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                            <TextField
                                label="Address"
                                type="text"
                                name="address"
                                //   value={address || ''}
                                validators={['required']}
                                errorMessages={['this field is required']}
                            />

                            {/* <TextField
                              label="State"
                              type="email"
                              name="email"
                              //   value={email || ''}
                              validators={['required', 'isEmail']}
                              errorMessages={[
                                  'this field is required',
                                  'email is not valid',
                              ]}
                            /> */}
                            <div className="form-group d-block d-flex flex-column">
                                <select
                                    class="form-select form-select-lg mb-2 p-2"
                                    aria-label="form-select-lg example"
                                    style={{
                                        // width: '400px',
                                        height: '60px',
                                        fontFamily: 'sans',
                                        color: 'gray',
                                        fontSize: '18px',
                                    }}
                                    name="state"
                                >
                                    <option value="AN">
                                        Andaman and Nicobar Islands
                                    </option>
                                    <option value="AP">Andhra Pradesh</option>
                                    <option value="AR">
                                        Arunachal Pradesh
                                    </option>
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
                                    <option value="JK">
                                        Jammu and Kashmir
                                    </option>
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
                            <TextField
                                sx={{ mb: 2 }}
                                label="State Code"
                                type="text"
                                name="monumber"
                                //   value={monumber || ''}

                                errorMessages={['this field is required']}
                            />
                        </Grid>
                    </Grid>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        //     onClick={() => this.setState({ addStartShow: true })}
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
