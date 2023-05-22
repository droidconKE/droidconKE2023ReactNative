import { Link, Stack } from 'expo-router';
import React from 'react';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';
import { styles } from '../../styles/common';

const _speakers = [
  {
    id: '1',
    name: 'John Doe',
  },
  {
    id: '2',
    name: 'Jane Doe',
  },
];

const speakers = () => {
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: 'Speakers',
          headerTitleAlign: 'center',
        }}
      />
      <StyledText>speakers</StyledText>

      {_speakers.map((speaker) => (
        <Link key={speaker.id} href={{ pathname: `${speaker.id}`, params: { id: speaker.id } }} style={styles.link}>
          <StyledText>Go to {speaker.name}'s page</StyledText>
        </Link>
      ))}
    </MainContainer>
  );
};

export default speakers;
