import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import LogoSource from "../images/Logo.png"

const StickyFullWidth = styled.div`
    display: flex;
    background-color: #4D9BF8;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
`

const Container = styled.div`
  padding: 1rem 1.5em 0 1.5em;
  max-width: 1200px;
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Menu = styled.ul`
    display: flex;
    flex-direction: row;
    flex-grow: 0.08;
    align-items: center;
    padding-left: 0px;
    padding-top: 8px;
    justify-content: space-between;
    transition: all ease-in-out 0.26s;
`

const AwakeLink = styled(Link)`
    color: white;
    text-decoration: none;
    font-size: 21px;
    padding: 0 10px;
    transition: all ease-in-out 0.26s;
    color: rgba(255, 255, 255, 1);

    &:hover {
        color: rgba(255, 255, 255, 0.7);
    }

    &.active {
        color: #3fff60;
    }
`

const Header = () => (
    <StickyFullWidth >
    <Container>
        <Link to="/">
            <img src={LogoSource} style={{maxHeight: '60px'}} alt="Awake Logo"/>
        </Link>
        <Menu>
            <AwakeLink to="/#about">about</AwakeLink>
            <AwakeLink to="/#team">team</AwakeLink>
            <AwakeLink to="/#faq">faq</AwakeLink>
            <AwakeLink to="/privacy" activeClassName="active">privacy</AwakeLink>
            <AwakeLink to="/contact" activeClassName="active">contact</AwakeLink>
        </Menu>
    </Container>
    </StickyFullWidth>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
