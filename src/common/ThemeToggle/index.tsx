import React from 'react';
import { useTheme } from '../ThemeContext';
import { ToggleButton, ToggleWrapper, IconWrapper } from './styled';

export const ThemeToggle: React.FC = () => {
  const { toggleTheme, isDarkMode } = useTheme();

  return (
    <ToggleWrapper>
      <ToggleButton onClick={toggleTheme} aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}>
        <IconWrapper isDarkMode={isDarkMode}>
          {isDarkMode ? (
            // Ikona słońca dla dark mode (żeby przełączyć na light)
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2"/>
            </svg>
          ) : (
            // Ikona księżyca dla light mode (żeby przełączyć na dark)
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" strokeWidth="2"/>
            </svg>
          )}
        </IconWrapper>
        <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </ToggleButton>
    </ToggleWrapper>
  );
};