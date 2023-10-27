import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SpeakerCard from '../../components/cards/SpeakerCard';
import Space from '../../components/common/Space';
import MainContainer from '../../components/container/MainContainer';
import type { ISessions, ISpeaker, Session, Speaker } from '../../global';
import { usePrefetchedEventData } from '../../services/api';

interface SpeakerItem extends Speaker {
  sessions: Array<Session>;
}

const getSpeakerSessions = (sessions: ISessions, speakers: ISpeaker) => {
  const speakerArray = [...speakers?.data] as Array<SpeakerItem>;

  speakerArray.map((speaker) => {
    speaker.sessions = sessions?.data.filter((session) =>
      session.speakers.some((_speaker) => _speaker.name === speaker.name),
    );
  });
  return speakerArray;
};

const SpeakersPage = () => {
  const { colors } = useTheme();
  const router = useRouter();

  const { sessions, speakers } = usePrefetchedEventData();

  const data = (sessions && speakers && getSpeakerSessions(sessions, speakers)) ?? [];

  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: 'Speakers',
          headerLeft: () => <AntDesign name="arrowleft" size={24} color={colors.text} onPress={() => router.back()} />,
        }}
      />

      <View style={styles.main}>
        <Space size={16} />

        <View style={styles.listContainer}>
          <FlashList
            data={data}
            renderItem={({ item }) => <SpeakerCard {...item} />}
            keyExtractor={(_, index: number) => index.toString()}
            numColumns={2}
            estimatedItemSize={100}
          />
        </View>
        <Space size={16} />
      </View>
    </MainContainer>
  );
};

export default SpeakersPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
