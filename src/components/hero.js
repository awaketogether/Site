import React from "react"
import styled from "styled-components"
import WavesSource from "../images/hero-waves.svg"

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
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
    bottom: 12vh;
    min-width: 100%;

    transform: skewY(3deg);
    transform-origin: top left;
`

const Leader = styled.h1`
    z-index: 1;
    max-width: 11em;
    font-size: 58px;
    line-height: normal;
    text-align: center;
    margin: -10vh 0 0 0;
    cursor: default;
    color: white;

    transform: skewY(3deg);
    transform-origin: top left;
`

const Hero = () => (
    <Container data-cy="hero">
        <Leader>Let’s correctly detect sleep disorders.</Leader>
        <Waves src={WavesSource} alt="Waves"/>
    </Container>
)

export default Hero