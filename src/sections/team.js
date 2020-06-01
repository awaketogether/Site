import React from "react"
import styled from "styled-components"

import PictoGithub from "../images/picto-github.svg"
import PictoTwitter from "../images/picto-twitter.svg"

import ProfilePicMichele from "../images/team/profile-michele.png"
import ProfilePicRaph from "../images/team/profile-raph.png"
import ProfilePicFinne from "../images/team/profile-finne.png"
import ProfilePicSimon from "../images/team/profile-simon.png"
import ProfilePicLeos from "../images/team/profile-leos.png"
import ProfilePicMathis from "../images/team/profile-mathis.png"

const Section = styled.section`
    max-width: 1242px;
    padding: 8em 2em 2em 2em;
    transition: all ease-in-out 0.1s;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const SectionTitle = styled.h1`
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 1.5em;
    color: #696969;
    transition: all ease-in-out 0.1s;
`

const ProfileContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

const ProfileCard = styled.div`
    background-color: grey;
    border-radius: 0.6em;
    width: 375px;
    margin: 0.4em;
    padding: 0.8em;

    background: linear-gradient(140.28deg, #FFFFFF 48.15%, #E4E4E4 108.3%);
    border: 1px solid rgba(163, 163, 163, 0.01);
    box-sizing: border-box;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.05);
`

const CardHeader= styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
`

const CardFooter = styled.div`
    background-color: #4D9BF8;
    margin-top: 0.5em;
    min-height: 0.6em;
    border-radius: 0.2em;
`

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    margin-left: 0.5em;
    min-height: 100%;
    position: relative;
    width: 100%;

    h2, p {
        margin: 0;
        padding: 0;
        cursor: default;
    }
    h2 {
        font-size: 26px;
        color: #4D9BF8;
    }
    p {
        color: #a0a0a0;
    }
`

const CardLinks = styled.div`
    align-self: flex-end;
    margin-bottom: auto;

    a {
        opacity: 0.74;
    }
    a:first-of-type {
        margin-right: 0.15em;
    }
    a:hover {
        opacity: 1;
    }
`

const Profile = ({name, job, github, twitter, pic}) => (
    <ProfileCard>
        <CardHeader>
            <img src={pic} alt="Profile"/>
            <CardContent>
                <CardLinks>
                    {
                        github &&
                        <a target="_blank" rel="noopener noreferrer" href={'https://github.com/' + github}>
                            <img src={PictoGithub} alt="Github"/>
                        </a>
                    }
                    {
                        twitter &&
                        <a target="_blank" rel="noopener noreferrer" href={'https://twitter.com/' + twitter}>
                            <img src={PictoTwitter} alt="Twitter"/>
                        </a>
                    }
                </CardLinks>
                <h2>{name}</h2>
                <p>{job}</p>
            </CardContent>
        </CardHeader>
        <CardFooter/>
    </ProfileCard>
)

const Team = () => (
    <Section id="team">
        <SectionTitle>Our team</SectionTitle>
        <ProfileContainer>
            {
                [
                    {
                        name: "Michele Leo",
                        job: "Lead Software Engineer",
                        github: "leodau",
                        twitter: "Michele_Leo",
                        pic: ProfilePicMichele
                    },
                    {
                        name: "Simon Provost",
                        job: "Software Engineer",
                        github: "simonprovost",
                        pic: ProfilePicSimon
                    },
                    {
                        name: "Leos Julien",
                        job: "Software Engineer",
                        github: "julien-leos",
                        pic: ProfilePicLeos
                    },
                    {
                        name: "Alexandre Finne",
                        job: "Software Engineer",
                        github: "alexandrefinne",
                        pic: ProfilePicFinne
                    },
                    {
                        name: "Raphael Dakiche",
                        job: "Software Engineer",
                        github: "raphaeldk",
                        pic: ProfilePicRaph
                    },
                    {
                        name: "Mathis Chaptinel",
                        job: "Software Engineer",
                        github: "kagemegami",
                        pic: ProfilePicMathis
                    }
                ].map(({name, job, github, twitter, pic}, key) => (
                    <Profile key={key} name={name} job={job} github={github} twitter={twitter} pic={pic}/>
                ))
            }
        </ProfileContainer>
    </Section>
)

export default Team