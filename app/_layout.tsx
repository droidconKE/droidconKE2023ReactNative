/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Appearance } from 'react-native';
import { theme_colors } from '../config/theme';
import { customFontsToLoad } from '../config/typography';

export default () => {
  const [theme, setTheme] = useState({ mode: Appearance.getColorScheme() });
  const [isReady, setIsReady] = useState(false);

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

  const [fontsLoaded] = useFonts(customFontsToLoad);

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
      ...theme_colors.dark,
    },
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 500);
  }, []);

  if (!fontsLoaded || !isReady) return <SplashScreen />;

  return (
    <ThemeProvider value={theme.mode === 'light' ? _lightTheme : _darkTheme}>
      <Slot />
    </ThemeProvider>
  );
};
