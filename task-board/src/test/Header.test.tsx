import { describe, it, expect } from "vitest";
import Header from "../components/Header";
import { screen, render } from "@testing-library/react";

describe("Rendering", () => {
  it("Header rendered without error", () => {
    render(<Header />);
    expect(
      screen.getByRole("heading", { name: "Team Task Board" }),
    ).toBeInTheDocument();
  });
});

//Visa rubrik
describe("Text in header rendered without error", () => {
  it("Header is displayed", () => {
    render(<Header />);
    expect(screen.getByText("Huvudrubrik")).toBeInTheDocument();
  });

  it("description is displayed", () => {
    render(<Header />);
    expect(screen.getByText("En kort beskrivning")).toBeInTheDocument();
  });
});
