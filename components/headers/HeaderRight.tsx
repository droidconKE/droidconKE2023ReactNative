import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';
import Avatar from '../buttons/Avatar';
import FeedbackButton from '../buttons/FeedbackButton';
import Row from '../common/Row';

//TODO: To be uncommented when auth flow development resumes
/*
const HeaderRightWithAuth = ({ handlePress }: { handlePress: () => void }) => {
  const router = useRouter();

  const { user } = useAuth();

  const { colors } = useTheme();

  if (!user) {
    return (
      <TouchableOpacity
        onPress={handlePress}
        testID="headerRight"
        style={[styles.icon, { backgroundColor: colors.tint }]}
      >
        <Ionicons name="lock-closed" size={20} color="white" />
      </TouchableOpacity>
    );
  }

  return (
    <Row style={styles.row} testID="headerRightWithUser">
      <FeedbackButton testID="feedbackButton" onPress={() => router.push('/feedback')} />
      <Avatar />
    </Row>
  );
};
*/

const HeaderRight = () => {
  const router = useRouter();

  return (
    <Row style={styles.row} testID="headerRight">
      <FeedbackButton testID="feedbackButton" onPress={() => router.push('/feedback')} />
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
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 8,
  },
});
