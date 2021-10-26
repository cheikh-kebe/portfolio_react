import React from "react";
import { Skills } from '.';
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup)

//good rendering of the Skills component

test('render skills component', () => {
  const { getByText } = render(<Skills />);
  expect(getByText(/Skills/i).textContent).toBe("Skills & Technologies")
})