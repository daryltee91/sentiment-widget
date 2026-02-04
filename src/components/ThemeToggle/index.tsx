import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
  // Default theme to user's preferred color scheme
  const [theme, setTheme] = useState<string>(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
  );

  const handleChangeTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);

    setTheme(newTheme);
  };

  return (
    <div className="theme-toggle-container">
      <button className="theme-toggle" onClick={handleChangeTheme} data-testid="theme-toggle">
        {theme === "dark" ? <Sun data-testid="theme-light" /> : <Moon data-testid="theme-dark" />}
      </button>
    </div>
  );
};
