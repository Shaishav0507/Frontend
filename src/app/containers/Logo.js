import React from 'react'

import styled from 'styled-components'
import LOGO from './logo.png'

const Icon = styled.img`
    height: 20vh;
    display: block;
    margin-left: auto;
    margin-right: auto;
`

const Logo = () => {
    return <Icon src={LOGO} style={{ width: '200px', height: '100px' }} />
}

export default Logo
