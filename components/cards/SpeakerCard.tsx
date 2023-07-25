import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import React from 'react';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';
import type { Session, Speaker } from '../../global';
import { truncate } from '../../util/helpers';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const { width } = Dimensions.get('window');

interface SpeakerCardProps extends Speaker {
  sessions: Array<Session>;
}

const SpeakerCard = (props: SpeakerCardProps) => {
  const { colors } = useTheme();
  const router = useRouter();

  const { name, avatar, tagline, sessions } = props;

  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      <Image source={{ uri: avatar }} style={[styles.image, { borderColor: colors.tint }]} contentFit="contain" />

      <Space size={16} />

      <Link href={{ pathname: `/${name}`, params: { name: name } }}>
        <StyledText font="bold" size="base" variant="primary">
          {name}
        </StyledText>
      </Link>

      <Space size={8} />

      <View style={styles.tagline}>
        <StyledText size="sm" variant="text" style={{ color: colors.textLight }}>
          {truncate(50, tagline)}
        </StyledText>
      </View>

      <Space size={16} />

      {sessions.length > 0 && (
        <TouchableOpacity
          style={[styles.button, { borderColor: colors.tint }]}
          onPress={() =>
            router.push({
              pathname: `/session/${sessions[0]?.slug}`,
              params: { slug: sessions[0]?.slug },
            })
          }
          testID="sessionButton"
        >
          <StyledText size="base" font="semiBold" style={[styles.buttonText, { color: colors.tint }]}>
            Session
          </StyledText>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SpeakerCard;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 24,
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 8,
    margin: 8,
    alignItems: 'center',
  },
  image: {
    width: 108,
    height: 108,
    borderRadius: 10,
    borderWidth: 2,
  },
  tagline: {
    width: '100%',
    height: 60,
    alignItems: 'center',
  },
  button: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 8,
    borderWidth: 2,
  },
  buttonText: {
    textTransform: 'uppercase',
  },
});
