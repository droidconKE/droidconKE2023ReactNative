import { Link, Stack } from 'expo-router';
import React from 'react';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import { styles } from '../../../styles/common';

const main = () => {
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/feedback" style={styles.link}>
              <StyledText>feedback</StyledText>
            </Link>
          ),
        }}
      />

      <StyledText bold>Welcome to the DroidCon2023!</StyledText>

      <Link href="/speakers" style={styles.link}>
        <StyledText>speakers</StyledText>
      </Link>
    </MainContainer>
  );
};

export default main;
