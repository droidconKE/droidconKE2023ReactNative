import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';
import FeedList from '../../../../components/lists/FeedList';

// TODO: implement feed page
/**
 * TASKS:
 * - should render the feed list component. Check out the starter code component in components/list folder.
 * - use data from mock/feed.ts
 */

export default function Page() {
  return (
    <MainContainer>
      <View>
        <FeedList />
        <Link href="/home/feed/share">
          <StyledText>Open Share bottomsheet</StyledText>
        </Link>
      </View>
    </MainContainer>
  );
}
