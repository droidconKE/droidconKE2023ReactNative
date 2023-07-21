import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, StyleSheet, View } from 'react-native';
import type { Session } from '../../global';
import { Sessions } from '../../mock/sessions';
import ViewAllButton from '../buttons/ViewAllButton';
import SessionCard from '../cards/SessionCard';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const SessionsList = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const sessions = Sessions.data.slice(0, 5); // filter sessions to 5
  const sessionCount = (Sessions.data.length - 5).toString();

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
          <SessionCard
            handlePress={() => router.replace({ pathname: `/session/${item.slug}`, params: { slug: item.slug } })}
            item={item}
            screen="home"
          />
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
});
