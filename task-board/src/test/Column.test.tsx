import { it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import Column from "../components/Column";

it("Column displays title", () => {
  render(
    <Column title="Test">
      <p>Some text</p>
    </Column>,
  );
  expect(screen.getByRole("heading", { name: "Test" })).toBeInTheDocument();
});

it("Column displays content of child", () => {
  render(
    <Column title="Test">
      <p>Some text</p>
    </Column>,
  );
  expect(screen.getByText("Some text")).toBeInTheDocument();
});
