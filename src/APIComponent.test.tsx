import "@testing-library/jest-dom"; // for toBeInTheDocument
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";
import { render, screen, waitFor } from "@testing-library/react";
import APIComponent from "./APIComponent";

// const server = setupServer(
//   http.get("/api", () => {
//     return new Response(JSON.stringify({ name: "Jack" }), {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//   })
// );

// сокращенная запись
const server = setupServer(
  http.get("/api", () => {
    return HttpResponse.json({ name: "Jack" });
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("gets the data", async () => {
  render(<APIComponent />);

  const out = await waitFor(() => screen.getByRole("contentinfo"));

  expect(out).toHaveTextContent("Name is Jack");
});
