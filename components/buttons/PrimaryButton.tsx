import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from '../common/StyledText';

type PrimaryButtonProps = {
  onPress: () => void;
  label: string;
};

const PrimaryButton = ({ onPress, label }: PrimaryButtonProps) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors.primary }]}
      onPress={onPress}
      testID="primaryButton"
    >
      <StyledText size="lg" font="semiBold" style={[styles.buttonText, { color: colors.background }]}>
        {label}
      </StyledText>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    borderRadius: 8,
  },
  buttonText: {
    textTransform: 'uppercase',
  },
});
