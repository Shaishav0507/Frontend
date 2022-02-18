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
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import { DatePicker } from '@mui/lab'
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined'

const TextField = styled(TextValidator)(() => ({
    width: '100%',
    marginBottom: '16px',
}))

const SimpleForm = () => {
    const [state, setState] = useState({
        date: new Date(),
        Name: '',
        Payment: new Date(),
        invoice: '',
        amount: '',
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

    const handleDateChange = (date) => {
        setState({ ...state, date })
    }
    const handlePaymentChange = (Payment) => {
        setState({ ...state, Payment })
    }

    const { Name, invoice, amount, date, Payment } = state

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
                            label="₹ Amount"
                            onChange={(e) => handleChange(e)}
                            type="number"
                            name="amount"
                            value={amount || ''}
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
                            label="Name"
                            onChange={(e) => handleChange(e)}
                            type="text"
                            name="Name"
                            value={Name || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <TextField
                            label="Invoice Number"
                            onChange={(e) => handleChange(e)}
                            type="number"
                            name="invoice"
                            value={invoice || ''}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={date}
                                onChange={(e) => handleDateChange(e)}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Invoice Date"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={Payment}
                                onChange={(e) => handlePaymentChange(e)}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        // variant="Outlined"
                                        id="mui-pickers-date"
                                        label="Payment Due"
                                        sx={{ mb: 2, width: '100%' }}
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
                <Button color="primary" variant="contained" type="submit">
                    <Icon>send</Icon>
                    <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                        Submit
                    </Span>
                </Button>
            </ValidatorForm>
        </div>
    )
}

export default SimpleForm
