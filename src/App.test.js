import { render, screen, act } from "@testing-library/react";
import App from "./App";

test("renders header with company name", () => {
  act(() => {
    render(<App />);
  });
  const companyNames = screen.getAllByText(/Оптима/i);
  expect(companyNames.length).toBeGreaterThan(0);
});
