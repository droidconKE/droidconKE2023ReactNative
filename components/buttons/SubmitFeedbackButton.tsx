import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import StyledText from '../common/StyledText';

type SubmitFeedbackButtonProps = {
  openModal: () => void;
  text: string;
};

const SubmitFeedbackButton = ({ openModal, text }: SubmitFeedbackButtonProps) => {
  const { colors } = useTheme();
  return (
    <Pressable style={[styles.pressableSubmit, { backgroundColor: colors.assetAccent }]} onPress={openModal}>
      <StyledText style={[{ color: colors.whiteConstant }]} font="semiBold">
        {text}
      </StyledText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressableSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 45,
  },
});

export default SubmitFeedbackButton;
