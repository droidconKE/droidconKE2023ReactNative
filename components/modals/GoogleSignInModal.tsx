import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import GoogleIcon from '../../assets/artworks/GoogleIcon';
import { typography } from '../../config/typography';
import { useAuth } from '../../context/auth';
import Row from '../common/Row';
import StyledText from '../common/StyledText';

type GoogleSignInModalProps = {
  visible: boolean;
  onClose: () => void;
};

const GoogleSignInModal = ({ visible, onClose }: GoogleSignInModalProps) => {
  const { signInWithGoogle } = useAuth();
  const { colors } = useTheme();
  const { primary, secondary } = typography;

  const handleSignIn = () => {
    signInWithGoogle();
    onClose();
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: colors.bg }]}>
            <Row style={styles.header}>
              <StyledText> </StyledText>
              <TouchableOpacity onPress={onClose}>
                <StyledText
                  style={{
                    color: colors.textLight,
                    fontFamily: primary.light,
                  }}
                >
                  CANCEL
                </StyledText>
              </TouchableOpacity>
            </Row>

            <View style={styles.modalContent}>
              <Pressable
                onPress={handleSignIn}
                style={[styles.button, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Row>
                  <View style={[styles.buttonIcon, { backgroundColor: colors.card }]}>
                    <GoogleIcon width={24} height={24} />
                  </View>
                  <View style={[styles.buttonText, { backgroundColor: colors.bg }]}>
                    <StyledText font="medium" size="md" style={{ fontFamily: secondary.medium }}>
                      Sign in with Google
                    </StyledText>
                  </View>
                </Row>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default GoogleSignInModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  modalView: {
    width: '90%',
    height: '50%',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 20,
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '80%',
    borderRadius: 4,
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonIcon: {
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
});
