import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import type { ColorSchemeName } from 'react-native';
import { Appearance } from 'react-native';
import { theme_colors } from '../config/theme';
import { customFontsToLoad } from '../config/typography';
import { AuthProvider } from '../context/auth';

type Theme = {
  mode: ColorSchemeName;
  system: boolean;
};

export default () => {
  const [theme, setTheme] = useState({ mode: Appearance.getColorScheme() });
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const updateTheme = (newTheme: Theme) => {
      let mode: ColorSchemeName;
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

    // if the theme of the device changes, update the theme
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ mode: colorScheme, system: true });
      setTheme({ mode: colorScheme });
    });
  }, [theme.mode]);

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
      SplashScreen.hideAsync();
    }, 500);
  }, []);

  if (!fontsLoaded || !isReady) return;

  return (
    <ThemeProvider value={theme.mode === 'light' ? _lightTheme : _darkTheme}>
      <AuthProvider>
        <Slot />
      </AuthProvider>
    </ThemeProvider>
  );
};
