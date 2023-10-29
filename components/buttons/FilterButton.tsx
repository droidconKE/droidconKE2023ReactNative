import { useTheme } from '@react-navigation/native';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { Pressable, StyleSheet } from 'react-native';
import StyledText from '../common/StyledText';

type ButtonProps = {
  label: string;
  isCenter?: boolean;
  onPress: () => void;
  selected: boolean;
  style?: StyleProp<ViewStyle>;
};

const FilterButton = ({ label, isCenter, onPress, selected, style }: ButtonProps) => {
  const { colors, dark } = useTheme();

  return (
    <Pressable
      testID="filterButton"
      onPress={onPress}
      style={[
        styles.button,
        isCenter && styles.centerButton,
        { backgroundColor: selected ? colors.tint : colors.bg },
        style,
      ]}
    >
      <StyledText size="base" font="regular" style={[selected && { color: dark ? colors.background : colors.text }]}>
        {label}
      </StyledText>
    </Pressable>
  );
};

export default FilterButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
  centerButton: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderRadius: 0,
  },
});
