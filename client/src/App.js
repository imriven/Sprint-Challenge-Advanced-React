import React from 'react';
import axios from 'axios';
import Display from "./components/display"
import Styled from "styled-components"
import LightBackground from "./media/soccer-day.jpg";
import DarkBackground from "./media/soccer-night.jpg"


const ContainerDiv = Styled.div`
display:flex;
flex-direction: column;
text-align: center;
padding:5%;
width: 100%;
`


const ImageBackground = Styled.div `
display: flex;
justify-content:center;
background-image: url(${LightBackground});
background-size:cover;
background-attachment: fixed;
background-position: center;
`

const AwesomeHeader = Styled.h1`
display:flex;
justify-content:center;
color: white;
text-shadow: 5px 5px 8px cadetBlue;
text-align: center;
`



class App extends React.Component {
  constructor() {
    super();
    this.state={
      data:[]
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
      .then(res => {
        console.log(res)
        this.setState({data: res.data})
        
      })
      .catch(err => console.error(err))
  }

  render() {
    return (
      <ImageBackground>
        <ContainerDiv>
      <AwesomeHeader id="header"><strong>World Cup App</strong></AwesomeHeader>
      { this.state.data && <Display players={this.state.data} /> }
      </ContainerDiv>
      </ImageBackground>
    )
  }
}

export default App;