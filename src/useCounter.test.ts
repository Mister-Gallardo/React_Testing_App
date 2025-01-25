import "@testing-library/jest-dom"; // для toBeInTheDocument
import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

test("should increment", () => {
  const { result } = renderHook(() => useCounter());

  act(() => result.current.increment());

  expect(result.current.count).toBe(1);
});
