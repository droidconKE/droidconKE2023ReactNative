import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';
import FeedList from '../../../../components/lists/FeedList';

export default function Page() {
  return (
    <MainContainer style={styles.main}>
      <View>
        <FeedList />
        <Link href="/home/feed/share">
          <StyledText>Open Share bottomsheet</StyledText>
        </Link>
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
  },
});
