import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import GetStarted2 from './GetStarted2'
import Tax from './tax.jpg'

import styled from 'styled-components'

const Conatainer = styled.div`
    background: linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff 35%,
        #8080ff 65%,
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
        lname: '',
        buss: '',
        slec1: '',
        slec2: '',
        slec3: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const { fname, lname, buss, slec3, slec1, slec2 } = formData
    return (
        <Conatainer>
            <img
                src={Tax}
                alt="Tax_Image"
                style={{
                    float: 'right',
                    width: '550px',
                    height: '400px',
                    marginTop: '70px',
                    marginRight: '70px',
                }}
            />
            <h1>Welcome to TaxRx !!</h1>
            <p>Send the Invoice or File GST Return</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group d-flex">
                    <input
                        className="  form-control"
                        style={{
                            width: '190px',
                            marginRight: '20px',
                            borderRadius: '15px',
                        }}
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        value={fname}
                        onChange={(e) => onChange(e)}
                        required
                    />
                    <input
                        className=" form-control"
                        style={{ width: '190px', borderRadius: '15px' }}
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
                        style={{ width: '400px', borderRadius: '15px' }}
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
                        class="form-select form-select-lg mb-2 p-2"
                        aria-label="form-select-lg example"
                        style={{ width: '400px', borderRadius: '15px' }}
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
                        class="form-select form-select-lg mb-2 p-2"
                        aria-label="form-select-lg example"
                        style={{ width: '400px', borderRadius: '15px' }}
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
                        class="form-select form-select-lg mb-3 p-2 "
                        aria-label="form-select-lg example"
                        style={{ width: '400px', borderRadius: '15px' }}
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
                <button
                    className="btn btn-primary "
                    type="submit"
                    style={{
                        borderRadius: '50px 50px',
                        width: '400px',
                    }}
                >
                    <Link
                        to="/onboarding"
                        style={{
                            color: 'white',
                            fontWeight: 'bold',
                            textDecoration: 'None',
                        }}
                    >
                        Next
                    </Link>
                </button>
            </form>
            {/* <GetStarted2 name={fname} /> */}
        </Conatainer>
    )
}

export default GetStarted1
