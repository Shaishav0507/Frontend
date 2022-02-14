import React, { useState } from 'react'
import { Redirect } from 'react-router-dom-old'
import { connect } from 'react-redux'
import { reset_password } from '../actions/auth'
import Logo from './Logo'

const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        email: '',
    })

    const { email } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        reset_password(email)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Redirect to="/" />
    }

    return (
        <div className="container mt-2 justify-content-center flex-column align-items-center d-flex">
            <Logo />
            <div
                className="forgot"
                style={{
                    backgroundColor: '#fff',
                    padding: '12px',
                    border: '1px solid #dfdfdf',
                }}
            >
                <h2>Forgot your password?</h2>
                <p>
                    Change your password in three easy steps. 
                    This will help you to secure your password!
                </p>
                <ol class="list-unstyled mb-5">
                    <li>
                        <span class="text-primary text-medium">1. </span>Enter
                        your email address below.
                    </li>
                    <li>
                        <span class="text-primary text-medium">2. </span>Our
                        system will send you a temporary link.
                    </li>
                    <li>
                        <span class="text-primary text-medium">3. </span>Use the
                        link to reset your password
                    </li>
                </ol>
            </div>
            <form onSubmit={(e) => onSubmit(e)} className="card mt-4">
                <div class="card-body">
                    <div className="  form-group">
                        <label for="email-for-pass">
                            <b>Enter your email address</b>
                        </label>
                        <input
                            className="form-control outline: 0"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                        />
                        <small class="form-text text-muted">
                            Enter the email address you used during the
                            registration on Taxrx.com. Then we'll email a link
                            to this address.
                        </small>
                    </div>
                </div>
                <div class="card-footer">
                    <button
                        className="btn btn-primary btn-block"
                        style={{ width: '230px', borderRadius: '50px 50px', marginLeft: '190px' }}
                        type="submit"
                    >
                        Reset Password
                    </button>
                </div>
            </form>
        </div>
    )
}

export default connect(null, { reset_password })(ResetPassword)
