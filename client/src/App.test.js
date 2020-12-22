import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import renderer from "react-test-renderer";

// renders without crashing
it("renders without crashing", () => {
  render(<App />);
});
