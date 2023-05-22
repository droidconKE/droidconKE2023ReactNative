/* eslint-disable @typescript-eslint/no-explicit-any */
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Slot } from 'expo-router';
import React, { useState } from 'react';
import { Appearance } from 'react-native';
import { ThemeContext } from '../contexts/ThemeContext';

export default () => {
  const [theme, setTheme] = useState({ mode: 'light', system: true });

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

  // monitor system theme changes
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ mode: colorScheme, system: true });
    });
  }

  const MyLightTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'rgb(255, 255, 255)',
    },
  };

  const MyDarkTheme = {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      background: '#20201E',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <ThemeProvider value={theme.mode === 'light' ? MyLightTheme : MyDarkTheme}>
        <Slot />
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
