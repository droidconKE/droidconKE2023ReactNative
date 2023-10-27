import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { blurhash } from '../../config/constants';
import type { Feed, IFeed } from '../../global';
import Row from '../common/Row';
import StyledText from '../common/StyledText';

interface FeedListItemProps {
  item: Feed;
}

type Props = {
  feed: IFeed;
};

dayjs.extend(relativeTime);
const { height } = Dimensions.get('screen');

const FeedListItem = ({ item }: FeedListItemProps) => {
  const { colors } = useTheme();
  return (
    <View style={[styles.feed, { borderBottomColor: colors.border }]} testID="feedItem">
      <StyledText size="md" font="regular">
        {item.body}
      </StyledText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: item.image }}
          transition={1000}
          contentFit="cover"
          placeholder={blurhash}
        />
      </View>

      <Row>
        <Link
          href={{
            pathname: '/home/feed/share',
          }}
        >
          <View style={styles.share}>
            <StyledText size="md" allowFontScaling font="bold" variant="link" style={styles.shareLabel}>
              Share
            </StyledText>
            <MaterialCommunityIcons size={20} name="share" color={colors.primary} />
          </View>
        </Link>

        <StyledText size="sm">{dayjs(item.created_at).fromNow()}</StyledText>
      </Row>
    </View>
  );
};

const FeedList = ({ feed }: Props) => {
  const recentFirst = (data: Array<Feed>) => {
    return data?.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
  };

  return (
    <View style={styles.main}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recentFirst(feed?.data)}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: { item: Feed }) => {
          return <FeedListItem item={item} key={item.title} />;
        }}
      />
    </View>
  );
};

export default FeedList;

const styles = StyleSheet.create({
  main: {
    paddingBottom: 20,
  },
  feed: {
    marginVertical: 8,
    borderBottomWidth: 1,
    padding: 12,
  },
  image: {
    height: height * 0.23,
    borderRadius: 8,
  },
  imageContainer: {
    borderRadius: 8,
    marginVertical: 8,
    overflow: 'hidden',
  },
  share: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  shareLabel: {
    marginRight: 6,
  },
});
