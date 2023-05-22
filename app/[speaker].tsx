/* eslint-disable react-hooks/rules-of-hooks */
import { Stack, useSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/common';

const speaker = () => {
  const { id } = useSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: `Speaker ${id}`,
          headerTitleAlign: 'center',
        }}
      />
      <Text>speaker id {id}</Text>
    </SafeAreaView>
  );
};

export default speaker;
