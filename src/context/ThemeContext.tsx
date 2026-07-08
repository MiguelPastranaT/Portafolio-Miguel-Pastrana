import React, {
  createContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const STORAGE_KEY = "portfolio-theme";

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  /**
   * Obtiene el tema inicial.
   * Prioridad:
   * 1. localStorage
   * 2. Preferencia del sistema
   * 3. light
   */
  const getInitialTheme = (): Theme => {
    const savedTheme = localStorage.getItem(STORAGE_KEY);

    if (savedTheme === "light" || savedTheme === "dark") {
      return savedTheme;
    }

    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  /**
   * Cada vez que cambia el tema:
   * - Guarda en localStorage
   * - Agrega o elimina la clase .dark
   */
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, theme);

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark"
    );
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "light" ? "dark" : "light"
    );
  };

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};