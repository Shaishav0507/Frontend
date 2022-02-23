import React, { Component, Fragment } from 'react'
import { Button, Icon } from '@mui/material'
import { Form } from 'react-bootstrap'
import { Span } from 'app/components/Typography'
import { ValidatorForm } from 'react-material-ui-form-validator'

export class AutocompleteCombo extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/expense/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                ExpenseId: null,
                Category: event.target.Category.value,
                Amount: event.target.Amount.value,
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
        return (
            <Fragment>
                <ValidatorForm
                    onSubmit={this.handleSubmit}
                    onError={() => null}
                    {...this.props}
                >
                    <Form.Group controlId="Category">
                        <Form.Control
                            style={{
                                width: '40%',
                                marginBottom: '16px',
                            }}
                            size="lg"
                            type="text"
                            placeholder="Category"
                            name="Category"
                        />
                    </Form.Group>
                    <Form.Group controlId="Amount">
                        <Form.Control
                            style={{
                                width: '40%',
                                marginBottom: '16px',
                            }}
                            size="lg"
                            type="text"
                            placeholder="Amount"
                            name="Amount"
                        />
                    </Form.Group>
                    <Button color="primary" variant="contained" type="submit">
                        <Icon>add</Icon>
                        <Span sx={{ pl: 1, textTransform: 'capitalize' }}>
                            Add Expense
                        </Span>
                    </Button>
                </ValidatorForm>
            </Fragment>
        )
    }
}
