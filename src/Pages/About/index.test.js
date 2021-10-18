import React from "react";
import { render, screen } from "@testing-library/react";
import { About } from ".";

it('render title pAbout', () =>{
  render(<About />);
  expect(screen.getByText('About')).toBeInTheDocument();
});