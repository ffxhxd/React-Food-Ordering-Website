import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact/Contact";
import "@testing-library/jest-dom";

test("should load contact component", () => {
  render(<Contact />);
  const heading = screen.getAllByRole("heading");

  //assertion
  expect(heading.length).toBe(4);
});

test("should load button inside the contact component", () => {
  render(<Contact />);
  //these roles are defined by jest
  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("test submit", () => {
  render(<Contact />);
  //these roles are defined by jest
  const text = screen.getByText("Submit");

  expect(text).toBeInTheDocument();
});
