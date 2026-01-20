import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider, useTheme } from "../components/ThemeProvider";

// Test component to access theme context
const TestComponent = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <span data-testid="resolved-theme">{resolvedTheme}</span>
      <button onClick={() => setTheme("light")}>Set Light</button>
      <button onClick={() => setTheme("dark")}>Set Dark</button>
    </div>
  );
};

describe("ThemeProvider", () => {
  it("provides default system theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );
    // Default is "system" when no localStorage value
    expect(screen.getByTestId("current-theme")).toHaveTextContent("system");
  });

  it("can set light theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Set Light"));
    expect(screen.getByTestId("current-theme")).toHaveTextContent("light");
  });

  it("can set dark theme", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    fireEvent.click(screen.getByText("Set Dark"));
    expect(screen.getByTestId("current-theme")).toHaveTextContent("dark");
  });

  it("applies theme class to document root", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    // Set to light
    fireEvent.click(screen.getByText("Set Light"));
    expect(document.documentElement.classList.contains("light")).toBe(true);

    // Set to dark
    fireEvent.click(screen.getByText("Set Dark"));
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });
});
