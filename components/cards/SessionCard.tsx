import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Dimensions, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import type { Session } from '../../global';
import { getSessionTimeAndLocation, truncate } from '../../util/helpers';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

interface SessionCardProps {
  handlePress: () => void;
  item: Session;
}
const { width } = Dimensions.get('window');

const SessionCard = (props: SessionCardProps) => {
  const { handlePress, item } = props;
  const { colors } = useTheme();
  return (
    <TouchableWithoutFeedback testID="session-card" onPress={handlePress}>
      <View style={[styles.card, { backgroundColor: colors.card }]}>
        <Image
          source={{ uri: item.session_image || '' }}
          style={styles.image}
          contentFit="cover"
          contentPosition="left"
        />
        <Space size={8} />
        <View style={styles.bottom}>
          <View style={styles.description}>
            <StyledText font="bold" numberOfLines={2} style={styles.title}>
              {truncate(50, item.title)}
            </StyledText>
          </View>

          <Space size={12} />

          <StyledText size="sm" font="light">
            {getSessionTimeAndLocation(item.slug)}
          </StyledText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default SessionCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.7,
    borderRadius: 10,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 124,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  bottom: {
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  description: {
    height: 40,
  },
  title: {
    textAlign: 'left',
    marginRight: 10,
  },
});
