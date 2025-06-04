import { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      setDarkMode(JSON.parse(saved));
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(prev => {
      const updated = !prev;
      localStorage.setItem('darkMode', JSON.stringify(updated));
      return updated;
    });
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const theme = darkMode ? 'dark' : 'light';

  return (
    <ThemeContext.Provider value={{ darkMode, theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
