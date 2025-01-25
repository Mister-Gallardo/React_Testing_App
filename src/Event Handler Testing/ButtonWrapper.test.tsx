import "@testing-library/jest-dom"; // для toBeInTheDocument
import { fireEvent, render, screen } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";

test("handle click", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add item" />);
  const buttonElement = screen.getByText("Add item");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
