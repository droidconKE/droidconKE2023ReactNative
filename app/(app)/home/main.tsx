import { useTheme } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import OrganizersCard from '../../../components/cards/OrganizersCard';
import SponsorsCard from '../../../components/cards/SponsorsCard';
import Space from '../../../components/common/Space';
import MainContainer from '../../../components/container/MainContainer';
import SessionsList from '../../../components/lists/SessionsList';
import SpeakersList from '../../../components/lists/SpeakersList';
import VideoPlayer from '../../../components/player/VideoPlayer';
import { prefetchEvent, usePrefetchedEventData } from '../../../services/api';

const Main = () => {
  const { colors } = useTheme();

  useLayoutEffect(() => {
    prefetchEvent();
  }, []);

  const { sessions, speakers, sponsors, organizers } = usePrefetchedEventData();

  return (
    <MainContainer preset="scroll">
      <Space size={16} />

      <View style={styles.main}>
        <Space size={10} />

        <VideoPlayer />

        <Space size={30} />

        {sessions && sessions.data.length > 0 ? (
          <SessionsList sessions={sessions} />
        ) : (
          <ActivityIndicator size="large" color={colors.tertiary} />
        )}

        <Space size={30} />

        {speakers && speakers.data.length > 0 ? (
          <SpeakersList speakers={speakers} />
        ) : (
          <ActivityIndicator size="large" color={colors.tertiary} />
        )}

        <Space size={6} />

        {sponsors && <SponsorsCard sponsors={sponsors} />}

        <Space size={16} />

        {organizers && <OrganizersCard organizers={organizers} />}

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
