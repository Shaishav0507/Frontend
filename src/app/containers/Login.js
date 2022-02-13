import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
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
        return <Redirect to="/" />
    }

    return (
        <>
            <div className="container mt-2 pt-5 d-flex flex-column align-items-center justify-content-center">
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
                                onChange={(e) => onChange(e)}
                                minLength="6"
                                required
                            />
                        </div>
                        <button
                            className="btn btn-primary mb-2 btn-block "
                            type="submit"
                            style={{ borderRadius: '50px 50px' }}
                        >
                            Login
                        </button>
                        <button
                            className="btn btn-primary btn-block"
                            style={{ borderRadius: '50px 50px' }}
                            type="submit"
                        >
                            <Link to="/launchpad" style={{ color: 'white' }}>
                                LaunchPad
                            </Link>
                        </button>
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
