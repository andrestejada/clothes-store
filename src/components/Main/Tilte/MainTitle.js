import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
    font-size: 2em;
    font-family: Helvetica;
    width: 100%;
    margin: 0 auto;
    padding: 1em 0;
    text-align: center;
    font-weight: bold;
    @media (max-width:400px){
        font-size: 1.5em;
    }
`

const MainTitle = () => {
    return (
        <Title>PRODUCTOS MÁS BUSCADOS</Title>
    )
}

export default MainTitle
