import React from "react"
import styled from "styled-components"

const Section = styled.section`
    max-width: 980px;
    padding: 2em;
    transition: all ease-in-out 0.1s;
`

const SectionTitle = styled.h1`
    font-size: 2.2em;
    text-align: center;
    margin-bottom: 1.5em;
    color: #696969;
    transition: all ease-in-out 0.1s;
`

const ItemContainer = styled.div`
    padding: 1em;
    overflow: hidden;
    transition: all ease-in-out 0.1s;
`

const ItemHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`

const ItemTitle = styled.h2`
    color: hsla(0, 0%, 0%, 0.7);
    transition: all ease-in-out 0.1s;
    margin: 0;
`

const ItemContent = styled.p`
    margin: 0;
    padding: 0;
    transition: all ease-in-out 0.1s;
`

const ItemNumber = styled.h2`
    margin-right: 0.4em;
    color: #52BE80;
    border-radius: 0.6em;
    padding: 0.2em;
    background: rgba(125,125,125, 0.2);
    background: -moz-linear-gradient(196deg, rgba(50,200,50,0.2) 0%, rgba(125,125,125,0.01) 100%);
    background: -webkit-linear-gradient(196deg, rgba(50,200,50,0.2) 0%, rgba(125,125,125,0.01) 100%);
    background: linear-gradient(196deg, rgba(50,200,50,0.2) 0%, rgba(125,125,125,0.01) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7d7d7d",endColorstr="#7d7d7d",GradientType=1);
`

const Mention = ({title, content, n}) => (
    <ItemContainer>
            <ItemHeader>
                <ItemNumber>{n + 1}.</ItemNumber>
                <ItemTitle>{title}</ItemTitle>
            </ItemHeader>
            <ItemContent>{content}</ItemContent>
    </ItemContainer>
)

const Legal = ({articles}) => (
    <Section>
        <SectionTitle>Legal Mentions</SectionTitle>
        {articles.map((article, key) => (<Mention key={key} n={key} title={article.title} content={article.content}/>))}
    </Section>
)

export default Legal