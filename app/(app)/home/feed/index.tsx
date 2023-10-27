import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import EmptyFeed from '../../../../assets/artworks/EmptyFeed';
import Space from '../../../../components/common/Space';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';
import FeedList from '../../../../components/lists/FeedList';
import { getEventFeed } from '../../../../services/api';

export default function Page() {
  const { colors } = useTheme();

  const { isLoading, data } = useQuery({ queryKey: ['feed'], queryFn: getEventFeed });

  if (isLoading) {
    return (
      <MainContainer style={styles.main}>
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.tertiary} />
        </View>
      </MainContainer>
    );
  }

  return (
    <MainContainer style={styles.main}>
      {data?.data && data?.data.length < 1 ? (
        <View style={styles.centered}>
          <EmptyFeed width={300} height={300} />
          <Space size={8} />
          <StyledText>This feed is empty for now.</StyledText>
        </View>
      ) : (
        <View>{data && <FeedList feed={data} />}</View>
      )}
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 0,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
