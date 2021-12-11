import { render, screen } from "@testing-library/react";
import Hello from "./Hello";

it('renders "Hello"', () => {
  render(<Hello />);
  const element = screen.getByText("Hello World");
  expect(element).toBeInTheDocument();
});
