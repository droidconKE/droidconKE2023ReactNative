import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { Dimensions, FlatList, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import type { Session } from '../../global';
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
  const sessionTime = '10:00 AM';
  const sessionLocation = 'Main Hall';

  // truncate title to 2 lines, and add ellipsis at the end
  const truncateTitle = (title: string) => {
    const titleLength = title.length;
    const maxTitleLength = 50;
    if (titleLength > maxTitleLength) {
      return `${title.substring(0, maxTitleLength)}...`;
    }
    return title;
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
            onPress={() => router.push({ pathname: `/home/sessions/${item.slug}`, params: { slug: item.slug } })}
          >
            <View style={[styles.card, { backgroundColor: colors.bg }]}>
              <Image source={{ uri: item.session_image || '' }} style={styles.image} contentFit="cover" />
              <Space size={8} />
              <View style={styles.description}>
                <StyledText font="bold" numberOfLines={2} style={styles.title}>
                  {truncateTitle(item.title)}
                </StyledText>

                <Space size={12} />

                <StyledText size="sm" font="light">
                  @ {sessionTime} {''} | {''} {sessionLocation}
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
  description: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    textAlign: 'left',
    marginRight: 10,
  },
});
