import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Conatainer = styled.div`
    background: linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff 50%,
        #8080ff 50%,
        #ff66ff 100%
    );
    height: 100vh;
    padding: 20px;
    padding-left: 150px;
    padding-top: 60px;
`

const GetStarted1 = () => {
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const [formData, setFormData] = useState({
        fname: '',
        password: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const { fname, lname, buss, slec3, slec1, slec2 } = formData
    return (
        <Conatainer>
            <h1>Welcome to TAXRX!</h1>
            <p>Tell us about you and your bussiness</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group d-flex">
                    <input
                        className="  form-control"
                        style={{ width: '200px' }}
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        value={fname}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <input
                        className=" form-control"
                        style={{ width: '200px' }}
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        value={lname}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group ">
                    What's your bussiness name?
                    <input
                        className="  form-control"
                        style={{ width: '400px' }}
                        type="text"
                        placeholder="Bussiness!"
                        name="buss"
                        value={buss}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    What's your bussiness do?
                    <select
                        class="form-select form-select-lg mb-3 p-2"
                        aria-label="form-select-lg example"
                        style={{ width: '400px' }}
                        name="slec1"
                        value={slec1}
                        onChange={(e) => onChange(e)}
                    >
                        <option selected disabled>
                            select menu
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group d-flex flex-column">
                    Bussiness Country
                    <select
                        class="form-select form-select-lg mb-3 p-2"
                        aria-label="form-select-lg example"
                        style={{ width: '400px' }}
                        name="slec2"
                        value={slec2}
                    >
                        <option selected disabled>
                            select menu
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="form-group d-flex flex-column">
                    Bussiness Currency
                    <select
                        class="form-select form-select-lg mb-3 p-2"
                        aria-label="form-select-lg example"
                        style={{ width: '400px' }}
                        name="slec3"
                        value={slec3}
                    >
                        <option selected disabled>
                            select menu
                        </option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">
                    <Link to="/onboarding" style={{ color: 'white' }}>
                        Next
                    </Link>
                </button>
            </form>
        </Conatainer>
    )
}

export default GetStarted1
