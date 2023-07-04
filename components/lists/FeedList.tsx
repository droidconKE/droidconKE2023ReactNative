import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import type { Feed } from '../../global';
import { Feed as FeedData } from '../../mock/feed';
import Row from '../common/Row';
import StyledText from '../common/StyledText';

// TODO: - Implement a feed list-view of feeds as seen in the design
/**
 * - order the feeds to most recent first
 * - clicking on the share button on each feed should open the bottom-sheet and pass params to the bottom-sheet - only implement this part if you’re comfortable working with bottomsheet
 * - add tests for the feed list component
 */

interface FeedListItemProps {
  item: Feed;
}

const { height } = Dimensions.get('screen');

const FeedListItem = ({ item }: FeedListItemProps) => {
  const { colors } = useTheme();
  return (
    <View style={styles.feed} testID="feedItem">
      <StyledText size="md">{item.body}</StyledText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.image }} />
      </View>

      <Row>
        <Link
          href={{
            pathname: '/home/feed/share',
            params: { feed: item },
          }}
        >
          <View style={styles.share}>
            <StyledText size="md" allowFontScaling font="bold" variant="link" style={styles.shareLabel}>
              Share
            </StyledText>
            <FontAwesome size={20} name="share" color={colors.primary} />
          </View>
        </Link>

        <StyledText size="sm">5 hours ago</StyledText>
      </Row>
    </View>
  );
};

const FeedList = () => {
  return (
    <View style={styles.main}>
      <FlatList
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        showsVerticalScrollIndicator={false}
        data={FeedData.data}
        keyExtractor={(item) => item.title}
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
  },
  separator: {
    borderBottomColor: '#7070702C',
    borderBottomWidth: 1,
  },
  image: {
    height: height * 0.23,
    borderRadius: 8,
    resizeMode: 'cover',
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
