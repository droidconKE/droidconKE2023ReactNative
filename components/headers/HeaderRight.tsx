import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import Avatar from '../buttons/Avatar';
import FeedbackButton from '../buttons/FeedbackButton';
import Row from '../common/Row';

// TODO: implement logic if user is logged in
/**
 * -  if user is logged in, show avatar and feedback button
 * -  if user is not logged in, show icon button
 * -  remove these comments after implementing logic
 */

const HeaderRight = () => {
  const router = useRouter();
  return (
    <Row style={styles.row} testID="headerRight">
      <FeedbackButton onPress={() => router.push('/feedback')} />
      <Avatar />
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
