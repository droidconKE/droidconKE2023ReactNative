import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { Dimensions, FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import type { Session, SessionForSchedule } from '../../global';
import { Schedule } from '../../mock/schedule';
import { Sessions } from '../../mock/sessions';
import ViewAllButton from '../buttons/ViewAllButton';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const { width } = Dimensions.get('window');

const SessionsList = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const sessions = Sessions.data.slice(0, 5); // filter sessions to 5
  const sessionCount = (Sessions.data.length - 5).toString();

  // truncate title to 2 lines, and add ellipsis at the end
  const truncateTitle = (title: string) => {
    const titleLength = title.length;
    const maxTitleLength = 50;
    if (titleLength > maxTitleLength) {
      return `${title.substring(0, maxTitleLength)}...`;
    }
    return title;
  };

  // a function that gets the start time and room.title of a session from the schedule.data array
  const getSessionTimeAndLocation = (slug: string) => {
    for (const key in Schedule.data) {
      const sessionData = Schedule.data[key];
      const session = sessionData?.find((item: SessionForSchedule) => item.slug === slug);
      if (session) {
        const startTime = session.start_time.split(':').slice(0, 2).join(':');
        return `@ ${startTime}  |  Room ${session?.rooms[0]?.title}`;
      }
    }
    return '';
  };

  return (
    <View style={styles.list}>
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          Sessions
        </StyledText>
        <ViewAllButton onPress={() => router.push('/home/sessions')} label={`+${sessionCount}`} />
      </Row>

      <Space size={16} />

      <FlatList
        data={sessions}
        renderItem={({ item }: ListRenderItemInfo<Session>) => (
          <TouchableWithoutFeedback
            testID="session-card"
            onPress={() => router.replace({ pathname: `/session/${item.slug}`, params: { slug: item.slug } })}
          >
            <View style={[styles.card, { backgroundColor: colors.bg }]}>
              <Image source={{ uri: item.session_image || '' }} style={styles.image} contentFit="cover" />
              <Space size={8} />
              <View style={styles.bottom}>
                <View style={styles.description}>
                  <StyledText font="bold" numberOfLines={2} style={styles.title}>
                    {truncateTitle(item.title)}
                  </StyledText>
                </View>

                <Space size={12} />

                <StyledText size="sm" font="light">
                  {getSessionTimeAndLocation(item.slug)}
                </StyledText>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item: Session, index: number) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SessionsList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  card: {
    width: width * 0.7,
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 124,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottom: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  description: {
    height: 40,
  },
  title: {
    textAlign: 'left',
    marginRight: 10,
  },
});
