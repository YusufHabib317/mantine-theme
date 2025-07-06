import { windows95Theme } from './themes/windows95';
import { glassTheme } from './themes/glass';
import { materialTheme } from './themes/material';

export type ThemeType = 'windows95' | 'glass' | 'material';

export const getTheme = (themeName: ThemeType) =>
  ({ windows95: windows95Theme, glass: glassTheme, material: materialTheme })[themeName];

export const themeHeaders = {
  windows95: {
    background: 'linear-gradient(90deg,#0087FF 0%,#006FCC 100%)',
    borderBottom: '1px solid #004080',
    color: 'white',
  },
  glass: {
    background: 'rgba(255,255,255,0.05)',
    backdropFilter: 'blur(24px)',
    borderBottom: '1px solid rgba(255,255,255,0.12)',
  },
  material: {
    background: 'white',
    borderBottom: '1px solid #E0E0E0',
    boxShadow: 'var(--md-elevation-1)',
  },
} as const;

export const themeBackgrounds = {
  windows95: {
    background: '#008080',
    backgroundImage:
      'linear-gradient(45deg,#008080 25%,transparent 25%),\
       linear-gradient(-45deg,#008080 25%,transparent 25%),\
       linear-gradient(45deg,transparent 75%,#008080 75%),\
       linear-gradient(-45deg,transparent 75%,#008080 75%)',
    backgroundSize: '20px 20px',
    backgroundPosition: '0 0,0 10px,10px -10px,-10px 0',
  },
  glass: {
    background: 'linear-gradient(135deg,#667eea 0%,#764ba2 50%,#f093fb 100%)',
    minHeight: '100vh',
  },
  material: {
    background: 'linear-gradient(135deg,#f5f7fa 0%,#c3cfe2 100%)',
    minHeight: '100vh',
  },
} as const;

export const themes = {
  windows95: windows95Theme,
  glass: glassTheme,
  material: materialTheme,
} as const;

export const getThemeFromMap = (themeName: ThemeType) => themes[themeName];
