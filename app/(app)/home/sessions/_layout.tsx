import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';

export default () => {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="[session]"
        options={{
          headerTintColor: colors.text,
          headerStyle: {
            backgroundColor: colors.background,
          },
          headerLeft: () => (
            <AntDesign name="left" size={24} color={colors.text} onPress={() => router.push('/home/sessions')} />
          ),
        }}
      />
    </Stack>
  );
};
