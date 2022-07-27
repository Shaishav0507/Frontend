import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom-old'
import { connect } from 'react-redux'
import { signup } from '../actions/auth'
import Logo from './Logo'
import { Button } from '@mui/material'

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        // last_name: '',
        email: '',
        password: '',
        re_password: '',
    })

    const { name, email, password, re_password } = formData

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const onSubmit = (e) => {
        e.preventDefault()

        if (password === re_password) {
            signup(name, email, password, re_password)
            setAccountCreated(true)
        }
    }

    if (isAuthenticated) {
        return <Redirect to="/" />
    }
    if (accountCreated) {
        return <Redirect to="/login" />
    }

    return (
        <div className="container mt-2   ">
            <Logo />
            <div
                style={{
                    backgroundColor: '#fff',
                    padding: '25px',
                    border: '1px solid #dfdfdf',
                    borderRadius: '50px 50px',
                    width: '350px',
                    margin: 'auto',
                }}
            >
                <h1 className=" d-flex flex-column align-items-center justify-content-center">
                    Sign Up
                </h1>
                <p className=" d-flex flex-column align-items-center justify-content-center">
                    Create your Account
                </p>
                <form
                    onSubmit={(e) => onSubmit(e)}
                    className=" d-flex flex-column align-items-center justify-content-center"
                >
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            name="name"
                            value={name}
                            style={{ borderRadius:'15px'}}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </div>
                    {/* <div className='form-group'>
                    <input
                        className='form-control'
                        type='text'
                        placeholder='Last Name*'
                        name='last_name'
                        value={last_name}
                        onChange={e => onChange(e)}
                        required
                    />
                </div> */}
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={email}
                            style={{ borderRadius:'15px'}}
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
                            style={{ borderRadius:'15px'}}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="password"
                            placeholder="Confirm Password"
                            name="re_password"
                            value={re_password}
                            style={{ borderRadius:'15px'}}
                            onChange={(e) => onChange(e)}
                            minLength="6"
                            required
                        />
                    </div>
                    <Button
                        className="btn btn-primary btn-block"
                        style={{ width: '170px', borderRadius: '50px 50px' }}
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </form>
            </div>
            <p className="mt-3 d-flex align-items-center justify-content-center">
                Already have an account?<Link to="/login"> Sign In</Link>
            </p>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})

export default connect(mapStateToProps, { signup })(Signup)
