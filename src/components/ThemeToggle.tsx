import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "./theme-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <Moon className="h-4 w-4 text-primary" />
          ) : (
            <Sun className="h-4 w-4 text-primary" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="border-border bg-card">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer ${theme === "light" ? "text-primary" : ""}`}
        >
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer ${theme === "dark" ? "text-primary" : ""}`}
        >
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`cursor-pointer ${theme === "system" ? "text-primary" : ""}`}
        >
          <Monitor className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
