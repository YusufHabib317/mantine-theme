import React from 'react';
import { Button, Group, Text, Paper, Stack, useMantineTheme } from '@mantine/core';
import { IconPalette, IconDeviceDesktop, IconSparkles, IconBrandGoogle } from '@tabler/icons-react';
import { useTheme } from '../contexts/ThemeContext';
import { ThemeType, themes } from '../../theme';

const themeConfig = {
  windows95: {
    name: 'Windows 95',
    icon: IconDeviceDesktop,
    description: 'Classic retro computing style',
  },
  glass: {
    name: 'Glass',
    icon: IconSparkles,
    description: 'Modern glassmorphism design',
  },
  material: {
    name: 'Material',
    icon: IconBrandGoogle,
    description: 'Material Design 3 style',
  },
} as const;

export function ThemeSwitcher() {
  const { currentTheme, setTheme, availableThemes } = useTheme();
  const mantineTheme = useMantineTheme();
  const isGlass = currentTheme === 'glass';

  const containerStyles: React.CSSProperties = isGlass ? {
    background: 'var(--glass-bg)',
    backdropFilter: 'var(--glass-blur)',
    border: 'var(--glass-border)',
    borderRadius: mantineTheme.radius.xl,
    color: 'white',
    boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
  } : {};

  const primaryKey = themes[currentTheme].primaryColor as string;
  const headerColor = isGlass ? 'white' : mantineTheme.colors[primaryKey]?.[6];

  return (
    <Paper p="md" style={containerStyles} withBorder={!isGlass}>
      <Group align="center" mb="sm">
        <IconPalette size={20} color={headerColor} />
        <Text fw={600} style={{ color: headerColor, textShadow: isGlass ? '0 0 10px rgba(56,189,248,0.5)' : 'none' }}>
          Theme Selector
        </Text>
      </Group>
      <Stack>
        {availableThemes.map(theme => {
          const config = themeConfig[theme as keyof typeof themeConfig];
          const Icon = config.icon;
          const themeObj = themes[theme];
          const colorKey = themeObj.primaryColor as string;
          const isActive = currentTheme === theme;
          
          return (
            <Button
              key={theme}
              variant={isActive ? 'filled' : 'light'}
              leftSection={<Icon size={16} />}
              onClick={() => setTheme(theme)}
              fullWidth
              justify="flex-start"
              color={colorKey}
            >
                <Text size="sm" fw={500}>
                  {config.name}
                </Text>
            </Button>
          );
        })}
      </Stack>
    </Paper>
  );
}
