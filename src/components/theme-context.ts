import { createContext, useContext } from "react";

export type Theme = "dark" | "light" | "system";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: "dark" | "light";
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const STORAGE_KEY = "azizkhan-dev-theme";

export function getSystemTheme(): "dark" | "light" {
  if (typeof window === "undefined") return "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
