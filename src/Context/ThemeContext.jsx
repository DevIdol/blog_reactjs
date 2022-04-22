import React, { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
const getStorageTheme = () => {
  let theme = "light";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={[{ theme }, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
