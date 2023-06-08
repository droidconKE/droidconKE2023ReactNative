import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type Props = {
  onPress: () => void;
  name: keyof typeof MaterialIcons.glyphMap;
  isActive: boolean;
};

const IconButton = ({ onPress, name, isActive }: Props) => {
  const { colors } = useTheme();
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} testID="iconButton">
      <MaterialIcons name={name} size={24} color={isActive ? colors.primary : colors.text} />
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
    height: 36,
    borderRadius: 8,
  },
});
