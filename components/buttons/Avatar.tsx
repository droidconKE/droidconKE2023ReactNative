import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

type AvatarProps = {
  bordered?: boolean;
};

/**
 * @param param bordered - will add a border to the child image
 * TODO: add image prop that will be used as the child image
 */

const Avatar = ({ bordered }: AvatarProps) => {
  const { colors } = useTheme();
  return (
    <Image
      source={{ uri: 'https://robohash.org/5759c92851e66680ae5723f5de4f7757?set=set4&bgset=bg2&size=400x400' }}
      style={[styles.avatar, { borderColor: bordered ? colors.primary : colors.background }]}
      resizeMode="contain"
      testID="avatar"
    />
  );
};

export default Avatar;

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
});
