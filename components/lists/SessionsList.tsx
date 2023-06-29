import { useTheme } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native';
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

  return (
    <View style={styles.list}>
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          Sessions
        </StyledText>
        <ViewAllButton onPress={() => router.push('/home/sessions')} label={Sessions.data.length.toString()} />
      </Row>
      <Space size={16} />
      <FlatList
        data={sessions}
        renderItem={({ item }: ListRenderItemInfo<Session>) => (
          <View style={[styles.card, { backgroundColor: colors.bg }]} testID="session-card">
            <Image source={{ uri: item.session_image || '' }} style={styles.image} resizeMode="cover" />
            <Space size={8} />
            <Link href={`/home/sessions/${item.slug}`} style={styles.description}>
              <StyledText font="bold" numberOfLines={2}>
                {item.title}
              </StyledText>
            </Link>
          </View>
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
    marginHorizontal: 10,
    marginVertical: 10,
  },
});
