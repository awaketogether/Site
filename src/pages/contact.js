import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import backgroundSource from "../images/bg-green.svg"

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5em;
    background-image: url(${backgroundSource});
    background-position: left right;
    background-repeat: no-repeat;
    background-attachment: scroll;
    height: 90vh;
    margin-top: 5em;
    padding-top: 5em;
`

const Section = styled.section`
    max-width: 980px;
    padding: 2em;
    transition: all ease-in-out 0.1s;
    color: white;

    border: 10px solid #3893ffb8;
    background-color: #4D9BF8;
    display: flex;
    border-radius: 0.7em;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
    margin: 0;
`

const Description = styled.h3`
    font-weight: 400;
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

const TextArea = styled.textarea`
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

const Form = styled.form`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-content: space-between;

    p {
        display: flex;
        width: 100%;
        align-content: space-between;
    }

    label {
        width: 20%;
    }

    .g-recaptcha {
        text-align: center;
        align-self: center;
    }
`

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            result: ''
        }
    }

    handleInputChange = event => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
          [name]: value,
        })
      }

    render() {
        const { name, email, message } = this.state;
        const isEnabled = name.length > 3 && email.length > 4 && message.length > 5

        return (
            <Layout>
                <SEO title="Contact" />
                <Container>
                    <Section id="contact">
                        <Title>Get in touch <span role="img" aria-label="emoji">💌</span></Title>
                        <Description>Use the form below, or hit us up at <b>awake.together.mtp@gmail.com</b></Description>
                        <Form name="contact" method="POST" data-netlify-recaptcha="true" data-netlify="true">
                            <input type="hidden" name="form-name" value="contact" />
                            <p>
                                <label htmlFor="input-name">Name</label>
                                <Input id="input-name" value={this.state.name} onChange={this.handleInputChange} type="text" name="name"/>
                            </p>
                            <p>
                                <label htmlFor="input-email">Email</label>
                                <Input id="input-email" value={this.state.email} onChange={this.handleInputChange} type="email" name="email"/>
                            </p>
                            <p>
                                <label htmlFor="input-message">Message</label>
                                <TextArea id="input-message" value={this.state.message} onChange={this.handleInputChange} name="message"/>
                            </p>
                            <div className="g-recaptcha" data-sitekey="6Lc1Y0caAAAAADE7C5qiAbzzitGW2kBuTRs6OWpF"></div>
                            <br/>
                            <Button type="submit" disabled={!isEnabled}>Send</Button>
                        </Form>
                    </Section>
                </Container>
            </Layout>
        )
    }
}

export default ContactPage