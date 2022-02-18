import React, { useState } from 'react'
import { Link } from 'react-router-dom-old'
// import GetStarted2 from './GetStarted2'
import Tax from './tax.png'

import styled from 'styled-components'

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

const GetStarted1 = () => {
    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value })

    const [formData, setFormData] = useState({
        fname: '',
        lname: '',
        buss: '',
        address: '',
        state: '',
        code: '',
    })

    const onSubmit = (e) => {
        e.preventDefault()
    }

    const { fname, lname, buss, address, state, code } = formData
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
                <div className="form-group ">
                    What's your Office Address?
                    <input
                        className="  form-control"
                        style={{ width: '400px', borderRadius: '15px' }}
                        type="text"
                        placeholder="Address !!"
                        name="address"
                        value={address}
                        onChange={(e) => onChange(e)}
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
                        value={state}
                        onChange={(e) => onChange(e)}
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
                        value={code}
                        onChange={(e) => onChange(e)}
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
