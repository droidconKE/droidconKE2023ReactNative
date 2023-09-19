import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import type { ColorSchemeName } from 'react-native';
import { Appearance, LogBox } from 'react-native';
import { theme_colors } from '../config/theme';
import { customFontsToLoad } from '../config/typography';
import { AuthProvider } from '../context/auth';

LogBox.ignoreLogs([
  /**
   * This warning keeps showing up because of a bug in expo.
   * The PR fixing the bug has been merged but not released yet.
   * This line removes the warning from the app but it will still show up in the console.
   * TODO: Remove this code when upgrading to Expo SDK 50.
   * More info: https://github.com/expo/expo/pull/23932
   */
  'The `redirect` prop on <Screen /> is deprecated and will be removed. Please use `router.redirect` instead',
]);

type Theme = {
  mode: ColorSchemeName;
  system: boolean;
};

SplashScreen.preventAutoHideAsync();

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
