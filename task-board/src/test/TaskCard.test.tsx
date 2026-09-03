import { it, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import TaskCard from "../components/TaskCard";

it("Taskcard displays properties", () => {
  render(
    <TaskCard
      id={1}
      title="Test"
      description="Description"
      assignee="John Doe"
      category="A category"
      priority="high"
    />,
  );
  expect(screen.getByText("Test")).toBeInTheDocument();
  expect(screen.getByText("Description")).toBeInTheDocument();
  expect(screen.getByText("John Doe")).toBeInTheDocument();
  expect(screen.getByText("A category")).toBeInTheDocument();
  expect(screen.getByText("high")).toBeInTheDocument();
});
