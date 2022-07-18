import { render } from "@testing-library/react";
import App from "../../pages/index";

test("Check index should load", () => {
  const { getByText } = render(<App />);
  expect(getByText("Hello World")).toBeInTheDocument();
  expect(getByText("Go to user")).toBeInTheDocument();
});