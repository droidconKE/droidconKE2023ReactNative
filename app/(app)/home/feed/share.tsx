import { useTheme } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from '../../../../components/common/StyledText';
import BottomSheetContainer from '../../../../components/container/BottomSheetContainer';

export default function Share() {
  const { colors } = useTheme();

  return (
    <BottomSheetContainer style={[styles.main, { backgroundColor: colors.background }]}>
      <StyledText>bottom Sheet</StyledText>
      <Link href="/home/feed">
        <StyledText>Close</StyledText>
      </Link>
    </BottomSheetContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 16,
  },
});
