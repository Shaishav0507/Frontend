import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom-old'
import { connect } from 'react-redux'
import { login } from '../actions/auth'
import Logo from './Logo'

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        login(email, password)
    }

    if (isAuthenticated) {
        return <Redirect to="/launchpad" />
    }

    return (
        <>
            <div className="container pt-3 d-flex flex-column align-items-center justify-content-center">
                <Logo />
                <div
                    style={{
                        backgroundColor: '#fff',
                        padding: '35px',
                        border: '1px solid #dfdfdf',
                        borderRadius: '50px 50px',
                    }}
                >
                    <h1 style={{ textAlign: 'center' }}>Sign In</h1>
                    <p style={{ textAlign: 'center' }}>
                        Sign into your Account
                    </p>
                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="email"
                                placeholder="Email"
                                name="email"
                                value={email}
                                style={{ borderRadius: '15px' }}
                                onChange={(e) => onChange(e)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                className="form-control"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={password}
                                style={{ borderRadius: '15px' }}
                                onChange={(e) => onChange(e)}
                                minLength="6"
                                required
                            />
                        </div>
                        <button
                            className="btn btn-primary mb-2 d-flex align-items-center justify-content-center  "
                            type="submit"
                            style={{
                                borderRadius: '50px 50px',
                                width: '180px',
                                marginLeft: '15px',
                            }}
                        >
                            Login
                        </button>
                        {/* <Link to="/launchpad" style={{ color: 'white' }}>
                            <button
                                className="btn btn-primary btn-block"
                                style={{
                                    borderRadius: '50px 50px',
                                    width: '180px',
                                    marginLeft: '15px',
                                }}
                                type="submit"
                            >
                                LaunchPad
                            </button>
                        </Link> */}
                    </form>
                </div>
                <p className="mt-3">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
                <p className="mt-1">
                    Forgot your Password?{' '}
                    <Link to="/reset-password">Reset Password</Link>
                </p>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { login })(Login)
