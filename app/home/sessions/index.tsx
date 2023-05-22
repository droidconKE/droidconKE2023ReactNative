/* eslint-disable react-hooks/rules-of-hooks */
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../../styles/common';

const _sessions = [
  {
    id: '1',
    title: 'React Native',
    description:
      'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.',
    speaker: '1',
  },
  {
    id: '2',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    speaker: '2',
  },
];

const sessions = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Sessions',
          headerTitleAlign: 'center',
        }}
      />
      <Text>sessions</Text>

      {_sessions.map((session) => (
        <Text
          key={session.id}
          onPress={() => router.push({ pathname: `/home/sessions/${session.id}`, params: { id: session.id } })}
          style={styles.link}
        >
          {session.title}
        </Text>
      ))}
    </SafeAreaView>
  );
};

export default sessions;
