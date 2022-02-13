import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Home = () => (
    <div className="container mt-3">
        <Logo />

        <div
            class="jumbotron vw-50 p-5 mt-3 d-flex flex-column align-items-center justify-content-center"
            style={{
                backgroundColor: 'whitesmoke',
                padding: '35px',
                border: '1px solid #dfdfdf',
                borderRadius: '50px 50px',
                width: '800px',
                margin: 'auto',
            }}
        >
            <h1 class="display-3">
                Welcome to<b> TaxRx </b>
            </h1>
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
