import { useEffect, useState } from "react";
import ThemeProviderContext from "./ThemeProviderContext";

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "ui-theme",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    localStorage.setItem(storageKey, theme);
    setTheme(theme);
    const root = window.document.documentElement;

    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme, setTheme, storageKey]);

  // const value = {
  //   theme,
  //   setTheme: (theme: Theme) => {
  //     localStorage.setItem(storageKey, theme);
  //     setTheme(theme);
  //   },
  // };

  return (
    <ThemeProviderContext.Provider {...props} value={{ theme, setTheme }}>
      {children}
    </ThemeProviderContext.Provider>
  );
}
