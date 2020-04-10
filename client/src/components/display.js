import React from "react";
import Card from "./card";
import { useDocTitle } from "../hooks/useDocTitle";
import Styled from "styled-components"


const ContainerDiv = Styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content:center;
justify-content: center;
margin: 3% 0;
border-radius: 25px;
padding: 1%;
width: 100%;
color:Black;
background-color: rgba(158, 230, 244, 0.5);
`

const NightContainerDiv = Styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
align-content:center;
justify-content: center;
margin: 3% 0;
border-radius: 25px;
padding: 1%;
width: 100%;
color:white;
background-color: rgba(0, 0, 0, 0.6);
`

const AwesomeSelect = Styled.select `
margin: 5% 0 3% 18%;
width: 50%;
border-radius: 15px;
box-shadow: 5px 5px 8px black;
outline:none;

`
const ExcellentLabel = Styled.label `
margin-top: 10%;
color: white;
font-size: 1.5em;
text-shadow: 3px 3px 5px gray;
`

function Display(props) {
   const [country, setCountry] = useDocTitle("country","All")
    const getCountries = () => {
        let uniqueCountries = [];
        props.players.forEach(player => {
            if (!uniqueCountries.includes(player.country)) {
                uniqueCountries.push(player.country)
            }
        })
        return uniqueCountries
    }

    const handleChange = e => {
        e.preventDefault()
        setCountry(e.target.value)
    }
    
    const playersToDisplay = () => {
        if (country === "All") {
            return props.players
        } 
        return props.players.filter(player => player.country === country)
    }

  return (
    <ContainerDiv>
      <ExcellentLabel htmlFor="countries" data-testid="countries">Choose Your Favorite Country:</ExcellentLabel>

      <AwesomeSelect id="countries" value={country} onChange={handleChange}>
        <option value="All">All</option>
  {getCountries().map(country => <option value={country}>{country}</option>)}
      </AwesomeSelect>
      
      {playersToDisplay().map(player => <Card player={player}/>)}
    </ContainerDiv>
  );
}

export default Display;
