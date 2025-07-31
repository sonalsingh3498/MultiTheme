import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { ThemeType, ThemeConfig } from '../types/types';
import type { ThemeContextType } from '../types/types';


// Theme definitions — you can customize colors, fonts, and layout here
const themes: Record<ThemeType, ThemeConfig> = {
  theme1: {
    id: 'theme1',
    name: 'Theme 1',
    colors: {
      primary: '#2563eb',
      secondary: '#64748b',
      background: '#ffffff',
      surface: '#f8fafc',
      text: '#1e293b',
      textSecondary: '#64748b',
      accent: '#3b82f6',
      border: '#e2e8f0',
    },
    fonts: {
      primary: 'Inter, sans-serif',
      secondary: 'Inter, sans-serif',
      heading: 'Inter, sans-serif',
    },
    layout: {
      type: 'standard',
      spacing: 'normal',
    },
  },
  theme2: {
    id: 'theme2',
    name: 'Theme 2',
    colors: {
      primary: '#f59e0b',
      secondary: '#78716c',
      background: '#0f172a',
      surface: '#1e293b',
      text: '#f1f5f9',
      textSecondary: '#94a3b8',
      accent: '#fbbf24',
      border: '#334155',
    },
    fonts: {
      primary: 'Playfair Display, serif',
      secondary: 'Georgia, serif',
      heading: 'Playfair Display, serif',
    },
    layout: {
      type: 'sidebar',
      spacing: 'spacious',
    },
  },
  theme3: {
    id: 'theme3',
    name: 'Theme 3',
    colors: {
      primary: '#ec4899',
      secondary: '#8b5cf6',
      background: '#fef7ff',
      surface: '#ffffff',
      text: '#581c87',
      textSecondary: '#7c2d12',
      accent: '#f97316',
      border: '#e879f9',
    },
    fonts: {
      primary: 'Pacifico, cursive',
      secondary: 'Comic Neue, cursive',
      heading: 'Pacifico, cursive',
    },
    layout: {
      type: 'grid',
      spacing: 'spacious',
    },
  },
};

// Create a context to hold theme-related values and functions
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider wraps the app and makes the theme state accessible everywhere
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('theme1'); // Default theme
  const [isLoading, setIsLoading] = useState(true); // Flag to prevent flicker on load

  // On first load, check if a theme was saved in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme); // Restore saved theme
    }
    setIsLoading(false); // Loading done
  }, []);

  // Switch theme and store the choice in localStorage
  const switchTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('selectedTheme', theme);
  };

  // Get the full theme config object based on current theme
  const themeConfig = themes[currentTheme];

  return (
    <ThemeContext.Provider
      value={{
        currentTheme,
        themeConfig,
        switchTheme,
        isLoading,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access theme context safely
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
