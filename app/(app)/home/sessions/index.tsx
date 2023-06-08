/* eslint-disable react-hooks/rules-of-hooks */
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';

// TODO: ALL Sessions page

/**
 * -  implement a List that displays all sessions
 * - list should either be collapsible or not
 * - Session card component should be either the small card that displays time, title, description, venue and a favorite icon button
 * - session card can also be a full card as seen in the home page, with image and speaker avatars too
 * - consider reusing the session card component from the home page
 */

// TODO: this is dummy data, replace with real data
const _sessions = [
  {
    id: '1',
    title: 'React Native',
    description:
      'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.',
    speaker: '1',
  },
  {
    id: '2',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    speaker: '2',
  },
];

const sessions = () => {
  const router = useRouter();

  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          title: 'Sessions',
          headerTitleAlign: 'center',
        }}
      />
      <StyledText>sessions</StyledText>

      {_sessions.map((session) => (
        <StyledText
          key={session.id}
          onPress={() => router.push({ pathname: `/home/sessions/${session.id}`, params: { id: session.id } })}
        >
          {session.title}
        </StyledText>
      ))}
    </MainContainer>
  );
};

export default sessions;
