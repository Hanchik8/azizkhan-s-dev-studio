import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";

describe("Projects", () => {
  it("renders the section heading", () => {
    render(<Projects />);
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
  });

  it("renders all project cards", () => {
    render(<Projects />);
    expect(screen.getByText("MegaSegaShop")).toBeInTheDocument();
    expect(screen.getByText("Web Chess")).toBeInTheDocument();
    expect(screen.getByText("Desktop File Explorer")).toBeInTheDocument();
  });

  it("has project descriptions", () => {
    render(<Projects />);
    expect(screen.getByText(/Microservices E-Commerce/i)).toBeInTheDocument();
  });

  it("has projects section with id", () => {
    render(<Projects />);
    const section = document.getElementById("projects");
    expect(section).toBeInTheDocument();
  });

  it("renders GitHub links for projects", () => {
    render(<Projects />);
    const githubLinks = screen.getAllByLabelText(/view.*on github/i);
    expect(githubLinks.length).toBeGreaterThan(0);
  });
});
