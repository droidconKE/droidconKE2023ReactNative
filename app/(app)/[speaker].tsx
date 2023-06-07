/* eslint-disable react-hooks/rules-of-hooks */
import { Stack, useSearchParams } from 'expo-router';
import React from 'react';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';

/**
 * TODO: speaker page
 * -  Should display information about the speaker or organizing team member
 * - should display an image, speaker/organizer badge, name of speaker/organizer, bio and twitter handle at the bottom
 */

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
