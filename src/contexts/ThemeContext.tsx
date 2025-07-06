import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { ThemeType, themes, themeBackgrounds } from '../../theme';

interface ThemeContextType {
  currentTheme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  availableThemes: ThemeType[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>('glass');

  useEffect(() => {
    const savedTheme = localStorage.getItem('mantine-theme') as ThemeType;
    if (savedTheme && themes[savedTheme]) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  const applyBodyStyles = (themeName: ThemeType) => {
    const body = document.body;

    body.removeAttribute('style');

    const bg = themeBackgrounds[themeName];
    if (!bg) return;

    Object.entries(bg).forEach(([key, value]) => {
      (body.style as any)[key as any] = value as string;
    });
  };

  useEffect(() => {
    applyBodyStyles(currentTheme);
  }, [currentTheme]);

  // Save theme to localStorage when it changes
  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
    localStorage.setItem('mantine-theme', theme);

    applyBodyStyles(theme);
  };

  const availableThemes: ThemeType[] = Object.keys(themes) as ThemeType[];

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
