import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Image, StyleSheet, View } from 'react-native';
import type { Speaker } from '../../global';
import { Speakers } from '../../mock/speakers';
import ViewAllButton from '../buttons/ViewAllButton';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const SpeakersList = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const speakers = Speakers.data.slice(0, 15); // filter speakers to 15
  return (
    <View style={styles.list}>
      <Row>
        <StyledText font="bold" size="lg" style={{ color: colors.primary }}>
          Speakers
        </StyledText>
        <ViewAllButton onPress={() => router.push('/speakers')} label={Speakers.data.length.toString()} />
      </Row>
      <Space size={16} />
      <FlatList
        data={speakers}
        renderItem={({ item }: ListRenderItemInfo<Speaker>) => (
          <View style={styles.item}>
            <Image
              source={{ uri: item.avatar }}
              style={[styles.image, { borderColor: colors.tint }]}
              resizeMode="contain"
            />
            <StyledText size="sm" font="medium" style={styles.description} numberOfLines={2}>
              {item.name}
            </StyledText>
          </View>
        )}
        keyExtractor={(item: Speaker, index: number) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default SpeakersList;

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  item: {
    flex: 1,
    marginHorizontal: 8,
    alignItems: 'center',
    width: 80,
    paddingVertical: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 16,
    borderWidth: 2,
  },
  description: {
    textAlign: 'center',
    marginVertical: 8,
  },
});
