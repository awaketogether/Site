import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import Hero from "../components/heroLocked"
import Ticker from "../sections/ticker"
import Legal from "../sections/legal"
import backgroundSource from "../images/bg-blue.svg"

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
    background-image: url(${backgroundSource});
    background-position: center right;
    background-repeat: no-repeat;
    background-attachment: scroll;
`

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <Hero/>
    <Container>
        <Ticker
            title='Awake stores all your data locally.'
            questions={[
                {
                    question: "Do you host our patients data in your servers?",
                    answer: "To protect your patients privacy, all their data is stored locally. Awake does not upload any data other than required user management credentials and software licencing."
                },
                {
                    question: "Do you support an specific accelerometer?",
                    answer: "At the moment, we do support a single well selected hardware already used by our first hospital partner here in the southern France, we intend to expand our support to many other well-known medical devices. If you wish us to support the one you use, or you want to know more about the one we are working with, feel free to contact us."
                },
                {
                    question: "Is awake trying to replace Polysomnography?",
                    answer: "Not at all, Polysomnography is the main tool used by experts in the field trying to understand the profile of a few selected patients. Awake gives the power to doctors to use Actigraphy as a tool to better choose those patients that may otherwise be incorrectly diagnosed."
                }
            ]}
        />
        <Legal articles={[
            {
                title: "Non-exhaustive Terms and Conditions of using the Website",
                content: "By accessing this website and/or any of our services & software, we assume you accept these terms and conditions. 'Client', 'You' and 'Your' refers to you, the person log on this website and compliant to the Company’s terms and conditions. 'The Company', 'Ourselves', 'We', 'Our' and 'Us', refers to AWAKE. 'Party', 'Parties', or 'Us', refers to both the Client and ourselves."
            },
            {
                title: "Cookies",
                content: "Most interactive websites use cookies to let us retrieve the user’s details for each visit. For the time being, we don’t use cookies, but we do reserve the right to do so in the future."
            },
            {
                title: "Content",
                content: "Approved organizations may hyperlink to our Website as follows: By use of our corporate name, By use of the uniform resource locator being linked to, By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site."
            },
            {
                title: "Hyperlinking",
                content: "We may consider and approve other link requests from the following types of organizations: commonly-known consumer and/or business information sources, dot.com community sites, associations or other groups representing charities, online directory distributors, internet portals, accounting, law and consulting firms, and educational institutions and trade associations. We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of AWAKE; and (d) the link is in the context of general resource information."
            },
            {
                title: "Software",
                content: "Unless otherwise stated, AWAKE and/or its licensors own the intellectual property rights for all material on Awake. All intellectual property rights are reserved. You may access this from Awake for use subjected to restrictions set in these terms and the conditions in your payed licence. You must not: Republish material from Awake, Sell, rent or sub-license material from Awake, Reproduce, duplicate or copy material from Awake, Redistribute content from Awake"
            },
        ]} />
    </Container>
  </Layout>
)

export default PrivacyPage
