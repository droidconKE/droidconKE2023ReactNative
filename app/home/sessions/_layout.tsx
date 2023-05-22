import { Stack } from 'expo-router';
import React from 'react';

export default () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="[session]" />
    </Stack>
  );
};
