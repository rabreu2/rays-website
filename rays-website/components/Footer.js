'use client'
import React from 'react'
import styled from 'styled-components'

const FooterStyle = styled.div`
    background: #000;
    color: #fff;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Footer = () => {
  return (
    <FooterStyle>
        <p>Property of Ray Abreu, but you can use it if you ask nicely</p>
    </FooterStyle>
  )
}

export default Footer