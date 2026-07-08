import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Cambiar tema"
      title={theme === "light" ? "Modo oscuro" : "Modo claro"}
      className="
        relative
        flex
        items-center
        justify-center
        w-11
        h-11
        rounded-full
        bg-card
        border
        border-default
        shadow-theme
        transition-theme
        hover:scale-105
        active:scale-95
      "
    >
      {theme === "light" ? (
        <Moon
          size={20}
          className="text-primary transition-theme"
        />
      ) : (
        <Sun
          size={20}
          className="text-sun transition-theme"
        />
      )}
    </button>
  );
};

export default ThemeToggle;