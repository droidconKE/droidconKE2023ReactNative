import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { memo } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { truncate } from '../../util/helpers';
import StyledText from '../common/StyledText';

type OrganizerCardProps = {
  name: string;
  photo: string;
  tagline?: string;
  handlePress: () => void;
};

const OrganizerCard = ({ name, photo, tagline, handlePress }: OrganizerCardProps) => {
  const { colors } = useTheme();

  return (
    <View style={styles.item}>
      <Pressable style={[styles.pressable, { borderColor: colors.tint }]} onPress={handlePress}>
        <Image source={{ uri: photo }} style={styles.avatar} contentFit="cover" />
      </Pressable>
      <View style={styles.textContainer}>
        <View style={styles.title}>
          <StyledText size="base" font="medium" style={styles.name} numberOfLines={2}>
            {name}
          </StyledText>
        </View>

        {tagline && (
          <StyledText size="sm" font="regular" variant="secondary" style={styles.description} numberOfLines={2}>
            {truncate(50, tagline)}
          </StyledText>
        )}
      </View>
    </View>
  );
};

export default memo(OrganizerCard);

const styles = StyleSheet.create({
  item: {
    marginHorizontal: 8,
    marginBottom: 8,
    alignItems: 'center',
    width: 108,
    height: 200,
    paddingVertical: 4,
  },
  pressable: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    borderWidth: 2,
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  title: {
    marginTop: 4,
    height: 40,
    textAlign: 'center',
  },
  name: {
    textAlign: 'center',
  },
  description: {
    flex: 1,
    textAlign: 'center',
  },
});
