import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Ticker from "../sections/ticker"
import Diagnosis from "../sections/diagnosis"
import Team from "../sections/team"
import backgroundGreen from "../images/bg-green.svg"
import backgroundBlue from "../images/bg-blue.svg"
import Newsletter from "../sections/newsletter"

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 5em;
    background-image: url(${backgroundGreen}), url(${backgroundBlue});
    background-position: center left, bottom right;
    background-repeat: no-repeat;
    background-attachment: scroll;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Container>
        <Diagnosis/>
        <Team/>
        <Ticker
            title='Frequently Asked Questions'
            questions={[
                {
                    question: "Are you developing a hardware solution?",
                    answer: "Not at all, we are creating a fully software solution. Our aim is to transform data coming from different existing medical & market hardware with our algorithms to then generate your patients pre-diagnosis and display them in our beautifully designed interface."
                },
                {
                    question: "Why hospitals don’t use consumer grade sleep detection hardware?",
                    answer: "Hospitals use highly specific and health graded hardware to monitor and make conclusions about patients health. Consumer grade products are not as highly effective as a real sleep examination, they would give false insights given that they are based upon healthy sleep patterns and data."
                },
                {
                    question: "How does your solution compare to others in the market?",
                    answer: "Sleep monitoring research and its software development are mostly conducted by companies developing their own hardware solutions. We aim our efforts into a fully compatible software solution, that can greatly improve how patient’s profiles are constructed and deliver more exploitable insights into the hands of experts."
                },
                {
                    question: "I have narcolepsy, is Awake something I can buy for myself?",
                    answer: "Even though most of our research is patient-centric, our software is to be used by sleep experts and not the general public. You can talk to your doctor about us!."
                },
            ]}
        />
        <Newsletter/>
    </Container>
  </Layout>
)

export default IndexPage
