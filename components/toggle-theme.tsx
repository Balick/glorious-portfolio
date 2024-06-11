"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ToggleButton() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">("light");

  React.useEffect(() => {
    setCurrentTheme(theme as "light" | "dark");
  }, [theme]);

  const handleThemeChange = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="fixed bottom-2 right-2 md:right-8 z-30"
      onClick={handleThemeChange}
    >
      {currentTheme === "dark" && (
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      {currentTheme === "light" && (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
