import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
};

export default ThemeToggle;
