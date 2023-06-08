import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from '../common/StyledText';

type Props = {
  onPress: () => void;
  label: string;
  iconName: keyof typeof AntDesign.glyphMap;
};

const ClearButton = ({ onPress, label, iconName }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID="clearButton">
      <StyledText subtitle style={{ color: colors.primary }}>
        {label}
      </StyledText>
      <View style={styles.spacer} />
      <AntDesign name={iconName} size={24} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default ClearButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    height: 36,
    borderRadius: 8,
  },
  spacer: {
    width: 8,
  },
});
