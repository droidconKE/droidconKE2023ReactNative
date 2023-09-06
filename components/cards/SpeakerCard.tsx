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

      <View style={styles.details}>
        <Link href={{ pathname: `/${name}`, params: { name: name } }}>
          <StyledText font="bold" size="base" variant="primary">
            {name}
          </StyledText>
        </Link>

        <Space size={8} />

        <View style={styles.tagline}>
          <StyledText size="sm" variant="text" style={[styles.text, { color: colors.textLight }]} numberOfLines={3}>
            {truncate(60, tagline)}
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
    </View>
  );
};

export default SpeakerCard;

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 24,
    height: 280,
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
  details: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  tagline: {
    width: '100%',
    flex: 1,
    height: 40,
  },
  text: {
    textAlign: 'center',
  },
  bottom: {
    width: '100%',
    alignItems: 'center',
    flex: 1,
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
