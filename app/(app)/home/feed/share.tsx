import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Link } from 'expo-router';
import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import SocialShareButton from '../../../../components/buttons/SocialShareButton';
import Row from '../../../../components/common/Row';
import StyledText from '../../../../components/common/StyledText';
import BottomSheetContainer from '../../../../components/container/BottomSheetContainer';

export default function Share() {
  const { colors } = useTheme();

  return (
    <BottomSheetContainer style={[styles.main, { backgroundColor: colors.background }]}>
      <Row>
        <Row>
          <FontAwesome name="share" size={20} color={colors.text} />
          <View style={styles.gap} />
          <StyledText subtitle>Share</StyledText>
        </Row>
        <Link href="/home/feed">
          <StyledText>CANCEL</StyledText>
        </Link>
      </Row>

      <View style={styles.content}>
        <Row>
          <SocialShareButton
            title="Twitter"
            iconName="twitter"
            handlePress={() => {
              Alert.alert('Twitter pressed');
            }}
          />
          <SocialShareButton
            title="Facebook"
            iconName="facebook"
            handlePress={() => {
              Alert.alert('Facebook pressed');
            }}
          />
        </Row>
        <Row>
          <SocialShareButton
            title="WhatsApp"
            iconName="whatsapp"
            handlePress={() => {
              Alert.alert('Whatsapp pressed');
            }}
          />
          <SocialShareButton
            title="Telegram"
            iconName="telegram"
            handlePress={() => {
              Alert.alert('Telegram pressed');
            }}
          />
        </Row>
      </View>
    </BottomSheetContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    padding: 16,
  },
  gap: {
    width: 8,
  },
  content: {
    flex: 1,
    marginTop: 16,
  },
});
