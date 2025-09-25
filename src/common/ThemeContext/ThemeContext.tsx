import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { themes, ThemeMode } from '../../theme';

interface ThemeContextType {
  currentTheme: ThemeMode;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // Domyślnie ustawiamy dark mode
  const [currentTheme, setCurrentTheme] = useState<ThemeMode>('dark');

  // Sprawdzamy localStorage przy pierwszym załadowaniu
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeMode;
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      setCurrentTheme(savedTheme);
    } else {
      // Jeśli nie ma zapisanego theme, ustawiamy dark jako domyślny
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  // Zapisujemy zmiany theme do localStorage
  useEffect(() => {
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const isDarkMode = currentTheme === 'dark';

  const contextValue: ThemeContextType = {
    currentTheme,
    toggleTheme,
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <StyledThemeProvider theme={themes[currentTheme] as any}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};