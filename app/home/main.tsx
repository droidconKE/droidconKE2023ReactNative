import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/common';

const main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/feedback" style={styles.link}>
              <Text>feedback</Text>
            </Link>
          ),
        }}
      />
      <Text>main page</Text>

      <Link href="/speakers" style={styles.link}>
        <Text>speakers</Text>
      </Link>
    </SafeAreaView>
  );
};

export default main;
