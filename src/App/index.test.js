import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from ".";

it('render title Cheikh', () =>{
  render(<App />);
  expect(screen.getByText('Cheikh Kebe')).toBeInTheDocument();
});