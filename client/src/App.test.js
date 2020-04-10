import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "@testing-library/jest-dom/extend-expect"
import { render, fireEvent } from '@testing-library/react';



test("Make sure select box appears", () => {
  const { getByLabelText } = render(<App />);
  const countryPrompt = getByLabelText("Choose Your Favorite Country:")
  expect(countryPrompt).toBeInTheDocument();
})

test("Make sure select changes country", () => {

})

test("Make sure heading appears", () => {
  const { getByText } = render(<App />);
  const appTitle = getByText("World Cup App")
  expect(appTitle).toBeInTheDocument();
})
