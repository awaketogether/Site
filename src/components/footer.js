import React from "react"
import styled from "styled-components"
import PartnersSource from "../images/partners.png"
import StripesSource from "../images/footer-stripes.svg"

import PictoGithub from "../images/picto-github.svg"
import PictoFacebook from "../images/picto-facebook.svg"
import PictoMedium from "../images/picto-medium.svg"

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
    z-index: 1;
`

const Stripes = styled.img`
    object-position: center;
    object-fit: cover;
    position: absolute;
    min-width: 100%;
    z-index: -1;
`

const SocialMedia = styled.div`
    align-self: flex-end;
    margin-bottom: auto;

    a {
        opacity: 0.74;
    }
    a:not(:last-of-type) {
        margin-right: 0.3em;
    }
    a:hover {
        opacity: 1;
    }
`

const Footer = () => (
    <Container>
        <img src={PartnersSource} alt="Partners"/>
        <p>
            <SocialMedia>
                <span role="img" aria-label="">👋</span> Check us out at {    }
                <a target="_blank" rel="noopener noreferrer" href={'https://github.com/awaketogether'}>
                    <img src={PictoGithub} alt="Github"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={'https://www.facebook.com/groups/1707928316004388'}>
                    <img src={PictoFacebook} alt="Facebook"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href={'https://medium.com/awake-together'}>
                    <img src={PictoMedium} alt="Medium"/>
                </a>
            </SocialMedia>
        </p>
        <p style={{margin: 0}}>Made with <span role="img" aria-label="<3">❤️</span></p>
        <p style={{margin: 0}}>Copyright © {new Date().getFullYear()} Awake Together</p>
        <Stripes src={StripesSource} alt="Stripes"/>
    </Container>
)

export default Footer