import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DarkMode from "./DarkMode";

// 1 - A simple test to ensure the component renders.
test("renders dark mode component", () => {
  render(<DarkMode />);

  // 2 - Expect to be able to find the element by the role of 'checkbox'
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;
  expect(inputElement).toBeInTheDocument();
});

// 3 - Ensure the component actually activates dark mode when the checkbox is toggled
test("toggles dark mode", () => {
  render(<DarkMode />);
  const inputElement = screen.getByRole("checkbox") as HTMLInputElement;

  // 4 - Simulate a click on our input
  expect(inputElement.checked).toEqual(false);
  fireEvent.click(inputElement);
  expect(inputElement.checked).toEqual(true);

  // 5 - We check here that the dark value is applied to the attribute after the element is clicked.
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});
