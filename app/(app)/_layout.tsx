import { useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React from 'react';

export default () => {
  const { colors } = useTheme();
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="speakers"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
        }}
      />
      <Stack.Screen
        name="[profile]"
        options={{
          headerTintColor: colors.whiteConstant,
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
      />
      <Stack.Screen
        name="feedback"
        options={{
          headerTintColor: colors.whiteConstant,
          title: 'Feedback',
          headerTransparent: true,
          headerTitleStyle: {
            fontWeight: 'normal',
          },
        }}
      />
      <Stack.Screen
        name="session"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};
