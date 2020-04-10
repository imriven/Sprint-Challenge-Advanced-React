import React from "react";
import Styled from "styled-components";


const ContainerDiv = Styled.div`
display: flex;
flex-wrap:column:
margin: 5% 0;
padding: 1%;
width: 30%;
color:white;
background-color: black; 
border-radius: 20px;
`

const AwesomeHeader = Styled.h3`
display:flex;
color: white;
text-align: center;
margin: 0 5% 0 10%;
`
const AwesomeImage = Styled.img`
display:flex;
width:20%;
height:auto;
border-radius: 50%;
box-shadow: 5px 5px 8px green;
margin:2%;
`
const TheInsideDiv = Styled.div`
width: 100%;
text-align: left;
margin-left:10%
`

class Card extends React.Component {
  render() {
    return (
      <ContainerDiv>
        <AwesomeHeader>
          <strong>Name:</strong>{this.props.player.name}
        </AwesomeHeader>
        <TheInsideDiv>
          <strong>Country:</strong>{this.props.player.country}
        </TheInsideDiv>
        <p>
          <strong>Google Searches:</strong>{this.props.player.searches}
        </p>
      </ContainerDiv>
    );
  }
}

export default Card;
