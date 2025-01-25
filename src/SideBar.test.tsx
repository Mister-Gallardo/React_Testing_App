// import '@testing-library/react'
import "@testing-library/jest-dom"; // for toBeInTheDocument
// import '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import SideBar from "./SideBar";

test("renders a name", () => {
  const items = [
    {
      name: "item_name",
      href: "item_href",
    },
  ];
  render(<SideBar items={items} />);
  const anchorElements = screen.getAllByRole("navigation");
  expect(anchorElements[0]).toHaveTextContent(items[0].name);
  expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
});
