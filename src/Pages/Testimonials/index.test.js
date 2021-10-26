import React from "react";
import { Testimonials } from '.';
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup)

//good rendering of the Skills component

test('render Testimonials component', () => {
  const { getByText } = render(<Testimonials />);
  expect(getByText(/Témoignages/i).textContent).toBe("Témoignages")
})