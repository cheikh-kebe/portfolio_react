import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Home } from ".";

it('render welcome title', () =>{
  render(<Router><Home /></Router>);
  expect(screen.getByText('Bienvenue sur mon portfolio.')).toBeInTheDocument();
});
