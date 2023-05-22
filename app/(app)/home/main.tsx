import { Link, Stack } from 'expo-router';
import React from 'react';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

const main = () => {
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/feedback">
              <StyledText>feedback</StyledText>
            </Link>
          ),
        }}
      />

      <StyledText big>Welcome to the DroidCon2023!</StyledText>

      <Link href="/speakers">
        <StyledText>speakers</StyledText>
      </Link>
    </MainContainer>
  );
};

export default main;
