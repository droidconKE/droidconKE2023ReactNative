import { Link, Stack } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

const feed = () => {
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/feedback">
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
