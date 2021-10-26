import React from "react";
import { Contact } from ".";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";

afterEach(cleanup);

//testing controlled component form

test("inputing text updating the state", () => {
  render(<Contact />)
  expect(screen.getByText(/Nom Prénom/i).textContent).toBe("Nom Prénom");
  fireEvent.change(screen.getByLabelText("Nom Prénom"), {
    target: { value: "Prénom" },
  });
  expect(screen.getByText(/Nom Prénom/i).textContent).not.toBe("");
});

test("submiting a form corks correctly", () => {
  const { getByTestId, getByText } = render(<Contact />);

  expect(getByText(/Envoyer/i).textContent).toBe("Envoyer");

  fireEvent.change(getByTestId("form"), { target: { name: { value: "Nom" } } });
});
