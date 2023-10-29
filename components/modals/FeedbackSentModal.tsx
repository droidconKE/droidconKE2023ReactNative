import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import React from 'react';
import { Modal, Pressable, StyleSheet, View } from 'react-native';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const FeedbackSentModal = (props: { showModal: boolean }) => {
  const { colors } = useTheme();
  const router = useRouter();

  const { showModal } = props;
  return (
    <Modal visible={showModal} transparent animationType="fade">
      <View style={[styles.modalView, { backgroundColor: colors.modalTint }]}>
        <View style={[styles.container, { backgroundColor: colors.background }]}>
          <Image style={styles.confetti} source={require('../../assets/images/confetti.gif')} contentFit="contain" />
          <StyledText font="bold" size="lg">
            Thank you for your feedback
          </StyledText>
          <Pressable
            style={[styles.pressable, { backgroundColor: colors.primary }]}
            onPress={() => {
              router.push('/home');
            }}
          >
            <StyledText style={[{ color: colors.whiteConstant }]}>OKAY</StyledText>
          </Pressable>
          <Space size={39} />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  confetti: {
    width: 166,
    height: 166,
    justifyContent: 'center',
    flex: 1,
  },
  modalView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  pressable: {
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 45,
    width: '100%',
  },
  pressableSubmitText: {
    color: 'white',
  },
  container: {
    opacity: 1,
    width: '90%',
    borderRadius: 10,
    minHeight: 367,
    paddingHorizontal: 100,
    paddingTop: 45,
    alignItems: 'center',
  },
});

export default FeedbackSentModal;
