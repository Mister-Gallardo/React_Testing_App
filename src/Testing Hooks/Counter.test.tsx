import "@testing-library/jest-dom"; // для toBeInTheDocument
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("increment", () => {
  render(<Counter />);

  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Increment");

  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});
