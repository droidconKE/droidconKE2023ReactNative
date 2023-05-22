/* eslint-disable react-hooks/rules-of-hooks */
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';
import { styles } from '../../../../styles/common';

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
    <MainContainer>
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
          style={styles.link}
        >
          {session.title}
        </StyledText>
      ))}
    </MainContainer>
  );
};

export default sessions;
