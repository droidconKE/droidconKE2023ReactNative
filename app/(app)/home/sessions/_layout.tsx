/* eslint-disable react/no-unstable-nested-components */
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import HeaderActionRight from '../../../../components/headers/HeaderActionRight';
import MainHeader from '../../../../components/headers/MainHeader';

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
          headerTitleAlign: 'left',
          headerTitle: () => <MainHeader />,
          headerRight: () => <HeaderActionRight />,
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
