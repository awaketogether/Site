import React from "react"
import styled from "styled-components"
import WavesSource from "../images/hero-waves-lock.svg"

const Container = styled.div`
    width: 100%;
    min-height: 65vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #4D9BF8;
    color: white;
    overflow: hidden;
    position: relative;
    transform: skewY(-3deg);
    transform-origin: top left;
`

const Waves = styled.img`
    object-position: center;
    object-fit: cover;
    position: absolute;
    bottom: 0;
    z-index: 10;
    min-width: 100%;

    transform: skewY(3deg);
    transform-origin: top left;
`

const Leader = styled.h1`
    z-index: 1;
    max-width: 8em;
    font-size: 55px;
    line-height: normal;
    margin: 0 0 0 24vw;
    cursor: default;
    color: white;
    align-self: start;

    transform: skewY(3deg);
    transform-origin: top left;
`

const Hero = () => (
    <Container>
        <Leader>We take your patients data seriously.</Leader>
        <Waves src={WavesSource} alt="Waves"/>
    </Container>
)

export default Hero