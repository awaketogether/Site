import React from "react"
import styled from "styled-components"
import PartnersSource from "../images/partners.png"
import StripesSource from "../images/footer-stripes.svg"

const Container = styled.footer`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top-left-radius: 12% 20%;
    border-top-right-radius: 12% 20%;
    background-color: #4D9BF8;
    color: white;
    padding: 2em 2em 3em 2em;
    overflow: hidden;
    position: relative;
`

const Stripes = styled.img`
    object-position: center;
    object-fit: cover;
    position: absolute;
    min-width: 100%;
`

const Footer = () => (
    <Container>
        <img src={PartnersSource} alt="Partners"/>
        <p style={{margin: 0}}>Made with <span role="img" aria-label="<3">❤️</span></p>
        <p style={{margin: 0}}>Copyright © {new Date().getFullYear()} Awake Together</p>
        <Stripes src={StripesSource} alt="Stripes"/>
    </Container>
)

export default Footer