import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import StyledText from '../common/StyledText';

type BackNavigationButtonProps = {
  text: string;
  onPress: () => void;
};

const BackNavigationButton = ({ text, onPress }: BackNavigationButtonProps) => {
  const { colors } = useTheme();
  return (
    <Pressable style={styles.headerTitle} onPress={onPress}>
      <AntDesign name="arrowleft" size={24} color={'white'} />
      <StyledText style={[{ color: colors.whiteConstant }]} size="lg">
        {text}
      </StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    paddingLeft: 23,
    flexDirection: 'row',
    columnGap: 22,
    position: 'absolute',
    width: '100%',
    paddingTop: 26,
    paddingBottom: 20,
  },
});

export default BackNavigationButton;
