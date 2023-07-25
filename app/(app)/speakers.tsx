import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import SpeakerCard from '../../components/cards/SpeakerCard';
import Space from '../../components/common/Space';
import MainContainer from '../../components/container/MainContainer';
import type { Session, Speaker } from '../../global';
import { Sessions } from '../../mock/sessions';
import { Speakers } from '../../mock/speakers';

interface SpeakerItem extends Speaker {
  sessions: Array<Session>;
}

const SpeakersPage = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const [data, setData] = useState<Array<SpeakerItem>>([]);

  const getSpeakerSessions = () => {
    const speakerArray = [...Speakers.data] as Array<SpeakerItem>;

    speakerArray.map((speaker) => {
      speaker.sessions = Sessions.data.filter((session) =>
        session.speakers.some((_speaker) => _speaker.name === speaker.name),
      );
    });
    setData(speakerArray);
  };

  useEffect(() => {
    getSpeakerSessions();
  }, []);

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

        <FlatList
          data={data}
          numColumns={2}
          renderItem={({ item }) => <SpeakerCard {...item} />}
          keyExtractor={(_, index) => index.toString()}
        />

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
});
