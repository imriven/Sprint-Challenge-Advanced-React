import React from "react";
import Styled from "styled-components";


const ContainerDiv = Styled.div`
text-align: center;
margin: 5% 0;
padding: 3%;
width: 80%;
color:white;
background-color: cadetBlue; 
border-radius: 20px;
box-shadow: 5px 5px 8px black;
`

const ContainerDivNight = Styled.div`
text-align: center;
margin: 5% 0;
padding: 3%;
width: 80%;
color:white;
background-color: cadetBlue; 
border-radius: 20px;
box-shadow: 5px 5px 8px black;
`

const AwesomeHeader = Styled.h3`
display:flex;
color: white;
text-align: center;
margin: 0 5% 0 10%;
`
const TheInsideDiv = Styled.div`
width: 80%;
`

class Card extends React.Component {
  render() {
    return (
      <ContainerDiv>
        <AwesomeHeader>
          <strong>Name:</strong>{this.props.player.name}
        </AwesomeHeader>
        <TheInsideDiv>
         <p><strong>Country:</strong>{this.props.player.country}</p> 
        
        <p>
          <strong>Google Searches:</strong>{this.props.player.searches}
        </p>
        </TheInsideDiv>
      </ContainerDiv>
    );
  }
}

export default Card;
