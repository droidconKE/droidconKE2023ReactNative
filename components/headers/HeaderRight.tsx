import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import FeedbackButton from '../buttons/FeedbackButton';
import Row from '../common/Row';

const HeaderRight = () => {
  const router = useRouter();

  return (
    <Row style={styles.row} testID="headerRight">
      <FeedbackButton testID="feedbackButton" onPress={() => router.push('/feedback')} />
    </Row>
  );
};

export default HeaderRight;

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 16,
    marginBottom: 8,
  },
});
