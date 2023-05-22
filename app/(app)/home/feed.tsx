import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import { styles } from '../../../styles/common';

const feed = () => {
  return (
    <MainContainer>
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
      <StyledText>feed</StyledText>
    </MainContainer>
  );
};

export default feed;
