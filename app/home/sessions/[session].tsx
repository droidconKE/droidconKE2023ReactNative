import { AntDesign } from '@expo/vector-icons';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../styles/common';

const Session = () => {
  const { id } = useSearchParams();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: `Session ${id}`,
          headerTitleAlign: 'center',
          headerTintColor: '#000',
          headerLeft: () => <AntDesign name="left" size={24} color="black" onPress={() => router.back()} />,
        }}
      />
      <Text>session id: {id}</Text>
    </SafeAreaView>
  );
};

export default Session;
