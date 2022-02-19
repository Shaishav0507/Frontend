import React from 'react'
import { Link } from 'react-router-dom-old'
// import GetStarted2 from './GetStarted2'
import Tax from './tax.png'

import styled from 'styled-components'
import { Component } from 'react'

const Conatainer = styled.div`
    background: linear-gradient(
        to right,
        #ffffff 0%,
        #ffffff 35%,
        #8080ff 65%,
        #1a1aff 100%
    );
    height: 100vh;
    padding: 20px;
    padding-left: 150px;
    padding-top: 60px;
`

export class GetStarted1 extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        fetch('http://localhost:8000/api/start/', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: null,
                fname: event.target.fname.value,
                lname: event.target.lname.value,
                business: event.target.business.value,
                address: event.target.address.value,
                state: event.target.state.value,
                code: event.target.code.value,
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
        <Conatainer>
            <img
                src={Tax}
                alt="Tax_Image"
                style={{
                    float: 'right',
                    width: '550px',
                    height: '500px',
                    marginTop: '20px',
                    marginRight: '150px',
                }}
            />
            <h1>Welcome to TaxRx !!</h1>
            <p>Send the Invoice or File GST Return</p>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group d-flex">
                    <input
                        className="form-control"
                        style={{
                            width: '190px',
                            marginRight: '20px',
                            borderRadius: '15px',
                        }}
                        type="text"
                        placeholder="First Name"
                        name="fname"
                        required
                    />
                    <input
                        className=" form-control"
                        style={{ width: '190px', borderRadius: '15px' }}
                        type="text"
                        placeholder="Last Name"
                        name="lname"
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
                        required
                    />
                </div>
                <div className="form-group ">
                    What's your Office Address?
                    <input
                        className="  form-control"
                        style={{ width: '400px', borderRadius: '15px' }}
                        type="text"
                        placeholder="Address !!"
                        name="address"
                        required
                    />
                </div>
                <div className="form-group d-flex flex-column">
                    State
                    <select
                        class="form-select form-select-lg mb-2 p-2"
                        aria-label="form-select-lg example"
                        style={{ width: '400px', borderRadius: '15px' }}
                        name="state"
                    >
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CH">Chandigarh</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="LA">Ladakh</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PY">Puducherry</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
                    </select>
                </div>
                <div className="form-group ">
                    What's your State Code ?
                    <input
                        className="  form-control"
                        style={{ width: '400px', borderRadius: '15px' }}
                        type="number"
                        placeholder="State Code !!"
                        name="code"
                        required
                    />
                </div>
                <button
                    className="btn btn-primary "
                    type="submit"
                    style={{
                        marginTop: '30px',
                        borderRadius: '50px 50px',
                        width: '400px',
                    }}
                >
                    <Link
                        to="/onboarding"
                        params={{fname:"test"}}
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
}
