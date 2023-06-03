import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from '../common/StyledText';

type ButtonProps = {
  handlePress: () => void;
  title: string;
  iconName: keyof typeof FontAwesome.glyphMap;
};

const SocialShareButton = ({ handlePress, title, iconName }: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, { backgroundColor: colors.background }]}>
      <FontAwesome name={iconName} size={20} color={colors.text} />
      <View style={styles.gap} />
      <StyledText subtitle>{title}</StyledText>
    </TouchableOpacity>
  );
};

export default SocialShareButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 8,
    height: 48,
    width: 150,
    borderRadius: 8,
    borderColor: '#00e2c3',
    borderWidth: 1,
    marginBottom: 8,
  },
  gap: {
    width: 8,
  },
});
