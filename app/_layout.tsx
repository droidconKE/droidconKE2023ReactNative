/* eslint-disable @typescript-eslint/no-explicit-any */
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { theme_colors } from '../config/theme';

export default () => {
  const [theme, setTheme] = useState({ mode: Appearance.getColorScheme() });

  const updateTheme = (newTheme: any) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === 'dark' ? 'light' : 'dark';
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        mode = Appearance.getColorScheme();
        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
  };

  useEffect(() => {
    // if the theme of the device changes, update the theme
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ mode: colorScheme, system: true });
      setTheme({ mode: colorScheme });
    });
  }, []);

  const _lightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...theme_colors.light,
    },
  };

  const _darkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      // background: '#20201E',
      ...theme_colors.dark,
    },
  };

  return (
    <ThemeProvider value={theme.mode === 'light' ? _lightTheme : _darkTheme}>
      <Slot />
    </ThemeProvider>
  );
};
