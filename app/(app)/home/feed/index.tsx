import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import MainContainer from '../../../../components/container/MainContainer';
import FeedList from '../../../../components/lists/FeedList';
import { getEventFeed } from '../../../../services/api';

export default function Page() {
  const { colors } = useTheme();

  const { isLoading, data } = useQuery({ queryKey: ['feed'], queryFn: getEventFeed });

  return (
    <MainContainer style={styles.main}>
      {isLoading ? (
        <View style={styles.centered}>
          <ActivityIndicator size="large" color={colors.tertiary} />
        </View>
      ) : (
        <View>{data && <FeedList feed={data} />}</View>
      )}
    </MainContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: 0,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
