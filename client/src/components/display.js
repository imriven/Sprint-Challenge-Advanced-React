import React from "react";
import Card from "./card";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Styled from "styled-components"

const ContainerDiv = Styled.div`
display: flex;
flex-wrap: wrap;
align-content:center;
justify-content: center;
margin: 3% 0 5% 0;
border-radius: 0 5%;
padding: 1%;
width: 100%;
color:black;
`

function Display(props) {
   const [country, setCountry] = useLocalStorage("country","All")
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
      <label htmlFor="countries">Choose Your Favorite Country:</label>

      <select id="countries" value={country} onChange={handleChange}>
        <option value="All">All</option>
  {getCountries().map(country => <option value={country}>{country}</option>)}
      </select>
      {playersToDisplay().map(player => <Card player={player}/>)}
    </ContainerDiv>
  );
}

export default Display;
