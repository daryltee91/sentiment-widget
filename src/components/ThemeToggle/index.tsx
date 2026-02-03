import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
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
      <button className="theme-toggle" onClick={handleChangeTheme}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </div>
  );
};
