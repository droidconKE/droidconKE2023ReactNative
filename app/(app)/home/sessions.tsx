import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';
import DayButton from '../../../components/buttons/DayButton';
import Row from '../../../components/common/Row';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';

// TODO: ALL Sessions page

/**
 * -  implement a List that displays all sessions
 * - list should either be collapsible or not
 * - Session card component should be either the small card that displays time, title, description, venue and a favorite icon button
 * - session card can also be a full card as seen in the home page, with image and speaker avatars too
 * - consider reusing the session card component from the home page
 */

// TODO: this is dummy data, replace with real data from mock/sessions.ts
const _sessions = [
  {
    id: '1',
    title: 'React Native',
    description:
      'React Native is a JavaScript framework for writing real, natively rendering mobile applications for iOS and Android.',
    speaker: '1',
    slug: 'react-native',
  },
  {
    id: '2',
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    speaker: '2',
    slug: 'react',
  },
];

const Sessions = () => {
  const router = useRouter();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderActionRight />,
        }}
      />

      <View style={styles.main}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Row>
            <DayButton
              date="16th"
              day="Day 1"
              handlePress={function (): void {
                throw new Error('Function not implemented.');
              }}
              selected
            />
            <Space size={20} horizontal />
            <DayButton
              date="17th"
              day="Day 2"
              handlePress={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
            <Space size={20} horizontal />
            <DayButton
              date="18th"
              day="Day 3"
              handlePress={function (): void {
                throw new Error('Function not implemented.');
              }}
            />
          </Row>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
        </Row>
        <StyledText>sessions</StyledText>

        {_sessions.map((session) => (
          <StyledText
            key={session.id}
            onPress={() => router.push({ pathname: `/session/${session.slug}`, params: { slug: session.slug } })}
          >
            {session.title}
          </StyledText>
        ))}
      </View>
    </MainContainer>
  );
};

export default Sessions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
  dayButton: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
});
