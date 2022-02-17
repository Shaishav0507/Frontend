import {
    Button,
    Icon,
    Grid,
    FormControlLabel,
    Checkbox,
    // InputAdornment,
    // IconButton,
    Fab,
} from '@mui/material'
import { styled } from '@mui/system'
import { Span } from 'app/components/Typography'
import React, { useState, useEffect } from 'react'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const SimpleCustForm = () => {
    const [state, setState] = useState({
        date: new Date(),
    })

    useEffect(() => {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            console.log(value)

            if (value !== state.password) {
                return false
            }
            return true
        })
        return () => ValidatorForm.removeValidationRule('isPasswordMatch')
    }, [state.password])

    const handleSubmit = (event) => {
        // console.log("submitted");
        // console.log(event);
    }

    const handleChange = (event) => {
        event.persist()
        setState({
            ...state,
            [event.target.name]: event.target.value,
        })
    }

    const { Name, username, email, monumber, address } = state

    // const handleFileUpload = () => {}
    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
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
                        <label htmlFor="upload-photo">
                            <input
                                style={{ display: 'none' }}
                                id="upload-photo"
                                name="upload-photo"
                                type="file"
                            />

                            <Fab
                                color="secondary"
                                size="small"
                                component="span"
                                aria-label="add"
                                variant="extended"
                                style={{
                                    marginTop: '30px',
                                    marginLeft: '140px',
                                    marginBottom: '70px',
                                }}
                            >
                                <PersonAddOutlinedIcon /> Upload photo
                            </Fab>
                        </label>

                        <TextField
                            type="text"
                            name="username"
                            id="standard-basic"
                            onChange={handleChange}
                            value={username || ''}
                            validators={[
                                'required',
                                'minStringLength: 4',
                                'maxStringLength: 9',
                            ]}
                            label="Username (Min length 4, Max length 9)"
                            errorMessages={['this field is required']}
                        />
                        <FormControlLabel
                            control={<Checkbox />}
                            label="I have read and agree to the terms of service."
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{ mt: 2 }}>
                        <TextField
                            label="Name"
                            onChange={handleChange}
                            type="text"
                            name="Name"
                            value={Name || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Email"
                            onChange={handleChange}
                            type="email"
                            name="email"
                            value={email || ''}
                            validators={['required', 'isEmail']}
                            errorMessages={[
                                'this field is required',
                                'email is not valid',
                            ]}
                        />
                        <TextField
                            sx={{ mb: 2 }}
                            label="Contact Number"
                            onChange={handleChange}
                            type="number"
                            name="monumber"
                            value={monumber || ''}
                            validators={[
                                'required',
                                'minStringLength:16',
                                'maxStringLength: 16',
                            ]}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Address"
                            onChange={handleChange}
                            type="text"
                            name="address"
                            value={address || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>add</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Add Customer
                    </Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleCustForm
