import React from "react"
import styled from "styled-components"
import LogoSource from "../images/awake-logo.png"

const lightGrey = "rgba(125, 125, 125, .2)"

const Section = styled.section`
    max-width: 980px;
    padding: 8em 2em 2em 2em;
    transition: all ease-in-out 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const SectionTitle = styled.h1`
    font-weight: normal;
    font-size: 2em;
    text-align: center;
    margin-bottom: 1.5em;
    color: #696969;
    transition: all ease-in-out 0.1s;
    line-height: 1.3em;
    max-width: 20em;
`

const Diagcontainer = styled.div`
    min-width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
`

const Diagblock = styled.div`
    min-width: 50%;
    display: flex;
    margin: 0.4em 1em;
    padding: 0.4em;
    text-align: center;
    justify-content: center;
    flex-direction: column;
`

const DiagTitle = styled.h2`
    font-size: 1.7em;
    color: hsla(0, 0%, 0%, 0.7);
`

const CardContainer = styled.div`
    margin: 0.3em 0;
    border-radius: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: fit-content;
    padding: 0.7em;
    cursor: crosshair;
    color: ${props => props.bg === lightGrey ? "#767676" : "white"};

    p, b {
        padding: 0 0.2em;
        margin: 0;
        font-size: 1.1em
    }
    span {
        font-size: 1.6em;
        padding-right: 0.2em;
    }
`

const DiagnosisCard = ({emoji, title, result, bg}) => (
    <CardContainer bg={bg} style={{backgroundColor: bg}}>
        <span role="img" aria-label="emoji">{emoji}</span>
        <p>{title}</p>
        <b>{result}</b>
    </CardContainer>
)

const Diagnosis = () => (
    <Section id="about">
        <img src={LogoSource} alt="Awake Logo - Blue"/>
        <SectionTitle>
        <b>Awake</b> is a <b>pre-diagnosis</b> software for sleep disorders, <b>directing</b> doctors towards the potential pathology of patients.
        </SectionTitle>
        <Diagcontainer>
            <Diagblock style={{alignItems: "flex-end"}}>
                <DiagTitle>Patient</DiagTitle>
                <DiagnosisCard emoji="👨" title="Gender" result="Male" bg={lightGrey} />
                <DiagnosisCard emoji="👶" title="Age" result="21" bg={lightGrey}/>
                <DiagnosisCard emoji="📏" title="Height" result="175cm" bg={lightGrey}/>
            </Diagblock>
            <Diagblock style={{alignItems: "flex-start"}}>
                <DiagTitle>Prediagnosis</DiagTitle>
                <DiagnosisCard emoji="🛌" title="Total Sleep Time" result="7h" bg="#4BDB88" />
                <DiagnosisCard emoji="📈" title="Sleep Efficiency" result="80%" bg="#4BDB88"/>
                <DiagnosisCard emoji="⏲" title="Sleep Latency" result="45min" bg="#FF823C"/>
                <DiagnosisCard emoji="⏱" title="Average Awakening" result="15s" bg="#4BDB88"/>
            </Diagblock>
        </Diagcontainer>
    </Section>
)

export default Diagnosis