import '@testing-library/jest-dom'; // для toBeInTheDocument

import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";

import { ReduxCounter } from "./ReduxCounter";
import { createStore } from "./store";

// в каждом тесте следует создать новое хранилище (createStore()),
// иначе в тестах будет использоваться одно и то же хранилище ,
// и изменения в первом тесте (fireEvent.click(addButton))
// будут влиять на состояние хранилища во втором

test("increment", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});

test("increment again", () => {
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);

  expect(counter).toHaveTextContent("1");
});