import React, { useState } from 'react'
import { Redirect } from 'react-router-dom-old'
import { connect } from 'react-redux'
import { reset_password_confirm } from '../actions/auth'
import Logo from './Logo'

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false)
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: '',
    })

    const { new_password, re_new_password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        const uid = match.params.uid
        const token = match.params.token

        reset_password_confirm(uid, token, new_password, re_new_password)
        setRequestSent(true)
    }

    if (requestSent) {
        return <Redirect to="/" />
    }

    return (
        <div className="container pt-3 d-flex flex-column align-items-center justify-content-center">
            <Logo />
            <div
                style={{
                    backgroundColor: '#000',
                    padding: '35px',
                    border: '1px solid #dfdfdf',
                    borderRadius: '50px 50px',
                }}
            >
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="form-group d-flex flex-column">
                        <label>New Password</label>
                        <input
                            className="form-control"
                            type="password"
                            placeholder="New Password"
                            name="new_password"
                            value={new_password}
                            style={{ width:"90px" ,borderRadius: '15px' }}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Confirm New Password"
                            name="re_new_password"
                            value={re_new_password}
                            style={{ borderRadius: '15px' }}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    )
}

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm)
