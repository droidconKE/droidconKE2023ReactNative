import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../styles/common';

const feed = () => {
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
      <Text>feed</Text>
    </SafeAreaView>
  );
};

export default feed;
