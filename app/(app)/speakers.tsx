import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SpeakerCard from '../../components/cards/SpeakerCard';
import Space from '../../components/common/Space';
import MainContainer from '../../components/container/MainContainer';
import type { Session, Speaker } from '../../global';
import { Sessions } from '../../mock/sessions';
import { Speakers } from '../../mock/speakers';

interface SpeakerItem extends Speaker {
  sessions: Array<Session>;
}

const getSpeakerSessions = () => {
  const speakerArray = [...Speakers.data] as Array<SpeakerItem>;

  speakerArray.map((speaker) => {
    speaker.sessions = Sessions.data.filter((session) =>
      session.speakers.some((_speaker) => _speaker.name === speaker.name),
    );
  });
  return speakerArray;
};

const SpeakersPage = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const data = getSpeakerSessions();

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
