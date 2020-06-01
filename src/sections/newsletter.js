import React from "react"
import styled from "styled-components"
import addToMailchimp from 'gatsby-plugin-mailchimp'
import "../components/reset.css"

const Section = styled.section`
    max-width: 980px;
    padding: 3em 2em 2em 2em;
    transition: all ease-in-out 0.1s;
`

const NewsletterContainter = styled.div`
    background-color: #4D9BF8;
    display: flex;
    border-radius: 0.7em;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2em;
    color: white;
    border: 6px solid #3893ffb8;
    animation: shake-animation 4.72s ease infinite;
    transform-origin: 50% 50%;

    &:hover, &.done {
        animation: none;
    }
`

const Title = styled.h1`
    color: white;
    margin: 0;
`

const Description = styled.h3`
    font-weight: 400;
`

const Input = styled.input`
    box-sizing: border-box;
    border-radius: 0.2em;
    background-color: rgba(255, 255, 255, 0.2);
    font-size: 1.1em;
    padding: 0.4em 1em;
    color: white;
    border: 5px solid #3893ffb8;
    flex-grow: 1;

    &:focus {
        border-color: rgba(255, 255, 255, 0.95);
    }
    &:hover:not(:focus) {
        border-color: rgba(255, 255, 255, 0.2);
    }
`

const Button = styled.button`
    flex-grow: 1;
    box-sizing: border-box;
    border-radius: 0.2em;
    color: white;
    padding: 0.4em 1em;
    background-color: #3893ffb8;
    border: 5px solid #4097ff;
    cursor: pointer;

    &:hover:not(:disabled) {
        border: 5px solid #ffffff;
    }
    &:disabled {
        opacity: 0.5;
        cursor: default;
    }
`

class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: '', result: '' }
    }

    _handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addToMailchimp(this.state.email)
        this.setState({result: response.result});
    }

    _handleChange = (event) => {
        this.setState({email: event.target.value})
    }

    render() {
        const isEnabled = this.state.email.length > 0
        const wasSent = this.state.result.length > 0

        return (
            <Section>
                <NewsletterContainter className={wasSent ? "done" : ""}>
                    <Title>Join our newsletter <span role="img" aria-label="emoji">📮</span></Title>
                    <Description>Receive all the latest <b>Awake</b> news.</Description>
                    {
                        (this.state.result === 'success') && <p>Welcome to the family <span role="img" aria-label="emoji">🥰</span></p>
                    }
                    {
                        (wasSent && this.state.result !== 'success') && <p>Oops, you're already in the family <span role="img" aria-label="emoji">🤔</span></p>
                    }
                    { !wasSent &&
                        <form onSubmit={this._handleSubmit}>
                            <Input type="email" value={this.state.email} onChange={this._handleChange} />
                            <Button style={{marginLeft: '0.5em'}} type="submit" disabled={!isEnabled}>Subscribe</Button>
                        </form>
                    }
                </NewsletterContainter>
            </Section>
        )
    }
}

export default Newsletter