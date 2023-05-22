import { Stack } from 'expo-router';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="speakers" />
      <Stack.Screen name="[speaker]" />
    </Stack>
  );
};
