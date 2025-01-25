import "@testing-library/jest-dom"; // for toBeInTheDocument
import { fireEvent, render, screen } from "@testing-library/react";
import Counter from "./Counter";

test("renders a name", () => {
  render(<Counter />);

  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getByText("Increment");

  fireEvent.click(buttonElement);
  expect(divElement).toHaveTextContent("Count is 1");
});
