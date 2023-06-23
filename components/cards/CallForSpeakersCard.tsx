import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Vector from '../../assets/artworks/Vector';
import Row from '../common/Row';
import StyledText from '../common/StyledText';

const { width } = Dimensions.get('window');

const CallForSpeakersCard = () => {
  const { colors } = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: colors.tint }]}>
      <Row>
        <Vector width={118} height={65} testID="vector" />
        <View>
          <StyledText font="semiBold" size="lg" style={styles.title}>
            Call for Speakers
          </StyledText>
          <StyledText size="sm" style={styles.smallText}>
            Apply to be a speaker
          </StyledText>
        </View>
        <AntDesign name="caretright" size={24} color="#fff" testID="caretrightIcon" />
      </Row>
    </View>
  );
};

export default CallForSpeakersCard;

const styles = StyleSheet.create({
  card: {
    width: width - 32,
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 24,
  },
  title: {
    color: '#fff',
  },
  smallText: {
    color: '#000',
  },
});
