import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/common';

const _speakers = [
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Doe',
  },
];

const speakers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Speakers',
          headerTitleAlign: 'center',
        }}
      />
      <Text>speakers</Text>

      {_speakers.map((speaker) => (
        <Link key={speaker.id} href={{ pathname: `${speaker.id}`, params: { id: speaker.id } }} style={styles.link}>
          <Text>Go to {speaker.name}'s page</Text>
        </Link>
      ))}
    </SafeAreaView>
  );
};

export default speakers;
