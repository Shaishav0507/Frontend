import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LOGO from './logo.png'

const Logo = styled.img`
    height: 20vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
`
const Home = () => (
    <div className="container">
        <Logo src={LOGO} style={{'width': '400px', 'height': '200px'}} />

        <div class="jumbotron vw-10 p-5 mt-3 d-flex flex-column align-items-center justify-content-center">
            <h1 class="display-3">Welcome to TaxRx</h1>
            <p class="lead">Send an Invoice or File GST Return.</p>
            <hr class="my-4" />
            <p>Click the Log In button</p>
            <Link class="btn btn-primary btn-lg" to="/login" role="button">
                Login
            </Link>
        </div>
    </div>
)

export default Home
