import React from 'react';
import { render, screen } from '@testing-library/react';
import {Projects } from '.';

it('render title projects', () => {
  render(<Projects />);
  expect(screen.getByText('Projets')).toBeInTheDocument();
});