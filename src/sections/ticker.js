import React from "react"
import styled from "styled-components"
import OpenSignSource from "../images/tick-open.svg"

const Section = styled.section`
    max-width: 980px;
    padding: 8em 2em 2em 2em;
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
    margin-bottom: 1em;
    cursor: pointer;
    overflow: hidden;
    transition: all ease-in-out 0.1s;

    &:hover {
        background: rgba(125,125,125, 0.1);
        background: -moz-linear-gradient(196deg, rgba(125,125,125,0.1) 0%, rgba(125,125,125,0.01) 100%);
        background: -webkit-linear-gradient(196deg, rgba(125,125,125,0.1) 0%, rgba(125,125,125,0.01) 100%);
        background: linear-gradient(196deg, ${props => !props.open ? "rgba(125,125,125,0.1)" : "rgba(50,200,50,0.1)"} 0%, rgba(125,125,125,0.01) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#7d7d7d",endColorstr="#7d7d7d",GradientType=1);
        border-radius: 15px;
        h2 {
            transform: translateX(5px);
        }
    }

`

const ItemHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 20px;
`

const ItemTitle = styled.h2`
    color: hsla(0, 0%, 0%, 0.7);
    transition: all ease-in-out 0.1s;
    margin: 0;
`

const ItemContent = styled.p`
    margin: 0;
    padding: 0;
    height: ${props => props.open ? "0" : "100%"};
    opacity: ${props => props.open ? 0 : 1};
    transition: all ease-in-out 0.1s;
`

const ItemHeaderButton = styled.img`
    min-width: 28px;
    max-width: 30px;
    transition: all ease-in-out 0.1s;
    opacity: ${props => props.open ? "1" : '0.5'};
`

class Item extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          open: props.n === 0 ? false : true
      };
    }

    render() {
      return (
        <ItemContainer open={this.state.open} onClick={() => {this.setState({open: !this.state.open})}}>
            <ItemHeader>
                <ItemTitle>{this.props.title}</ItemTitle>
                <ItemHeaderButton style={!this.state.open ? {transform: 'rotate(45deg)', filter: 'grayscale(100%)'} : {}} open={this.state.open} src={OpenSignSource} alt="Close | Open"/>
            </ItemHeader>
            <ItemContent open={this.state.open}>{this.props.text}</ItemContent>
        </ItemContainer>
      );
    }
  }

const Ticker = ({title, questions}) => (
    <Section id="faq">
        <SectionTitle>{title}</SectionTitle>
        {questions.map((question, key) => (<Item key={key} n={key} title={question.question} text={question.answer}/>))}
    </Section>
)

export default Ticker