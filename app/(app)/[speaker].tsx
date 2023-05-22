/* eslint-disable react-hooks/rules-of-hooks */
import { Stack, useSearchParams } from 'expo-router';
import React from 'react';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';

const speaker = () => {
  const { id } = useSearchParams();

  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: `Speaker ${id}`,
          headerTitleAlign: 'center',
        }}
      />
      <StyledText>speaker id {id}</StyledText>
    </MainContainer>
  );
};

export default speaker;
