import { Stack, useSearchParams } from 'expo-router';
import React from 'react';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';

const Session = () => {
  const { id } = useSearchParams();
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: `Session ${id}`,
          headerTitleAlign: 'center',
        }}
      />
      <StyledText>session id: {id}</StyledText>
    </MainContainer>
  );
};

export default Session;
