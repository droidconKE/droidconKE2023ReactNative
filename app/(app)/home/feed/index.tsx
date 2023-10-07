import React from 'react';
import { StyleSheet, View } from 'react-native';
import MainContainer from '../../../../components/container/MainContainer';
import FeedList from '../../../../components/lists/FeedList';

export default function Page() {
  return (
    <MainContainer style={styles.main}>
      <View>
        <FeedList />
      </View>
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
  },
});
