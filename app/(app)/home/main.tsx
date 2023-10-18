import { Stack } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import OrganizersCard from '../../../components/cards/OrganizersCard';
import SponsorsCard from '../../../components/cards/SponsorsCard';
import Space from '../../../components/common/Space';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import SessionsList from '../../../components/lists/SessionsList';
import SpeakersList from '../../../components/lists/SpeakersList';
import VideoPlayer from '../../../components/player/VideoPlayer';

const Main = () => {
  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight />,
        }}
      />

      <Space size={16} />

      <View style={styles.main}>
        <Space size={10} />

        <VideoPlayer />

        <Space size={30} />

        <SessionsList />

        <Space size={30} />

        <SpeakersList />

        <Space size={6} />

        <SponsorsCard />

        <Space size={16} />

        <OrganizersCard />

        <Space size={16} />
      </View>
    </MainContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    alignItems: 'center',
  },
  section: {
    flex: 1,
  },
  image: {
    height: 175,
    width: '100%',
  },
});
