import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Modal, Pressable, StyleSheet, TouchableOpacity, View } from 'react-native';
import GoogleIcon from '../../assets/artworks/GoogleIcon';
import { useAuth } from '../../context/auth';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type GoogleSignInModalProps = {
  visible: boolean;
  onClose: () => void;
};

const GoogleSignInModal = ({ visible, onClose }: GoogleSignInModalProps) => {
  const { signInWithGoogle } = useAuth();
  const { colors } = useTheme();

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
                <StyledText style={{ color: colors.textLight }}>CANCEL</StyledText>
              </TouchableOpacity>
            </Row>

            <View style={styles.modalContent}>
              <Pressable
                onPress={handleSignIn}
                style={[styles.button, { backgroundColor: colors.card, borderColor: colors.border }]}
              >
                <Row>
                  <GoogleIcon width={30} height={30} />
                  <Space size={8} horizontal />
                  <StyledText style={styles.buttonText}>Sign in with Google</StyledText>
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
    paddingBottom: 8,
    borderBottomColor: '#fdcb7520',
    borderBottomWidth: 0.5,
  },
  modalView: {
    width: '90%',
    height: '40%',
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
    marginTop: 16,
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 4,
    justifyContent: 'center',
    borderWidth: 1,
  },
  buttonText: {
    marginRight: 12,
  },
});
