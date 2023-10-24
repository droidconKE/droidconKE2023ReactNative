import { useTheme } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import type { ISessions, Session } from '../../global';
import { usePrefetchedEventData } from '../../services/api';
import { getSessionTimeAndLocation } from '../../util/helpers';
import ViewAllButton from '../buttons/ViewAllButton';
import SessionCard from '../cards/SessionCard';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type Props = {
  sessions: ISessions;
};

const SessionsList = ({ sessions }: Props) => {
  const { colors } = useTheme();
  const router = useRouter();
  const data = sessions?.data.slice(0, 5); // filter sessions to 5
  const sessionCount = (sessions?.meta.paginator.count - 5).toString();
  const { schedule } = usePrefetchedEventData();

  return (
    <View style={styles.list}>
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          Sessions
        </StyledText>
        <ViewAllButton onPress={() => router.push('/home/sessions')} label={`+${sessionCount}`} />
      </Row>

      <Space size={16} />

      <View style={styles.listContainer}>
        <FlashList
          data={data}
          renderItem={({ item }) => (
            <SessionCard
              handlePress={() => router.push({ pathname: `/session/${item.slug}`, params: { slug: item.slug } })}
              item={item}
              screen="home"
              time={(schedule && getSessionTimeAndLocation(item.slug, schedule)) ?? ''}
            />
          )}
          keyExtractor={(item: Session, index: number) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          estimatedItemSize={25}
        />
      </View>
    </View>
  );
};

export default SessionsList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
});
