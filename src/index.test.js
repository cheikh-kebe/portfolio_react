import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

it('render title portfolio', () =>{
  render(<App />);
  expect(screen.getByText('Portfolio')).toBeInTheDocument();
});