import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClientProvider } from '@tanstack/react-query';
import * as Font from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import type { ColorSchemeName } from 'react-native';
import { Appearance } from 'react-native';
import { theme_colors } from '../config/theme';
import { customFontsToLoad } from '../config/typography';
import { queryClient } from '../services/api/react-query';

type Theme = {
  mode: ColorSchemeName;
  system: boolean;
};

SplashScreen.preventAutoHideAsync();

export default () => {
  const [isReady, setIsReady] = useState(false);
  const [theme, setTheme] = useState({ mode: Appearance.getColorScheme() });

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

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(customFontsToLoad);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  useLayoutEffect(() => {
    if (isReady) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 3000);
    }
  }, [isReady]);

  if (!isReady) return null;

  return (
    <ThemeProvider value={theme.mode === 'light' ? _lightTheme : _darkTheme}>
      <QueryClientProvider client={queryClient}>
        <Slot />
      </QueryClientProvider>
    </ThemeProvider>
  );
};
