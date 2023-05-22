import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/common';

const feedback = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>feedback</Text>
    </SafeAreaView>
  );
};

export default feedback;
