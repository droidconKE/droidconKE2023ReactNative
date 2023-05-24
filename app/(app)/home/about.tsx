import { Link, Stack } from 'expo-router';
import React from 'react';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

const about = () => {
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: 'About',
          headerTitleAlign: 'center',
          headerRight: () => (
            <Link href="/feedback">
              <StyledText>feedback</StyledText>
            </Link>
          ),
        }}
      />
      <StyledText>about</StyledText>
    </MainContainer>
  );
};

export default about;
