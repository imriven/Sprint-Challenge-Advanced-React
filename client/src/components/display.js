import React from 'react';
import Card from "./card";
import useLocalStorage from "../hooks/useLocalStorage"

function Display () {
  return (
    <div className="App">
      Add New Animal
      <AnimalForm />
    </div>
  );
}

export default Display;