import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Dimensions, Pressable, StyleSheet, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import type { Session, SessionForSchedule } from '../../global';
import { getScheduleTimeAndLocation, getSessionTime, getSessionTimeAndLocation, truncate } from '../../util/helpers';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type SessionCardHome = {
  screen: 'home';
  item: Session;
  handlePress: () => void;
};

type SessionCardSessions = {
  screen: 'sessions';
  item: SessionForSchedule;
  variant?: 'card' | 'list';
  handlePress: () => void;
  handleBookMark: () => void;
};

type SessionCardProps = SessionCardHome | SessionCardSessions;

const { width } = Dimensions.get('window');

/**
 *
 * @param handlePress: function that returns nothing
 * @param handleBookMark: function that bookmarks and returns nothing
 * @param item: object of type T
 * @param screen: 'home' | 'sessions', default is 'home'
 * @param variant: 'card' | 'list'
 * @returns SessionCard Component
 */

const SessionCardOnHome = (props: Omit<SessionCardHome, 'screen'>) => {
  const { handlePress, item } = props;
  const { colors } = useTheme();

  return (
    <TouchableWithoutFeedback testID="card" onPress={handlePress} disabled={item.slug.length < 1}>
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

const SessionCardOnSessions = (props: Omit<SessionCardSessions, 'screen'>) => {
  const { handlePress, item, handleBookMark } = props;
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <TouchableWithoutFeedback testID="card-sessions" onPress={handlePress} disabled={item.slug.length < 1}>
      <View style={[styles.card, styles.cardTertiary, { backgroundColor: colors.card }]}>
        {item.session_image !== null ? (
          <Image
            source={{
              uri:
                item.session_image ||
                'https://res.cloudinary.com/droidconke/image/upload/v1668083311/prod/upload/sessions/pwt9pnojtmng8bymxkls.png',
            }}
            style={styles.image}
            contentFit="cover"
            contentPosition="left"
          />
        ) : (
          <Image
            source={require('../../assets/images/banner.png')}
            style={styles.image}
            contentFit="cover"
            contentPosition="center"
          />
        )}

        <Space size={4} />

        <View style={styles.bottomForSessions}>
          <StyledText size="sm" font="light">
            {getScheduleTimeAndLocation(item.start_date_time, item.end_date_time, item.rooms[0])}
          </StyledText>
          <Space size={11} />
          <View>
            <StyledText font="bold" numberOfLines={2} style={styles.title}>
              {truncate(50, item.title)}
            </StyledText>
          </View>
          <Space size={16} />
          <Row>
            <Row style={styles.avatarRow}>
              {item.speakers.map((speaker) => (
                <Pressable
                  key={speaker.avatar}
                  onPress={() => router.push({ pathname: '../speaker', params: speaker })}
                >
                  <Image source={{ uri: speaker.avatar || '' }} style={[styles.avatar, { borderColor: colors.tint }]} />
                </Pressable>
              ))}
            </Row>
            <AntDesign
              testID="bookmark"
              name={item.is_bookmarked ? 'star' : 'staro'}
              size={21}
              color={item.is_bookmarked ? colors.tertiary : colors.primary}
              onPress={handleBookMark}
            />
          </Row>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const SessionCardList = (props: Omit<SessionCardSessions, 'screen'>) => {
  const { handlePress, item, handleBookMark } = props;
  const { colors } = useTheme();

  const timeSplitted: Array<string> = getSessionTime(item.start_time).split(' ');

  return (
    <TouchableOpacity testID="card-list" onPress={handlePress} disabled={item.slug.length < 1}>
      <Row style={[styles.listCard, { backgroundColor: colors.card }]}>
        <Row style={styles.sessionCardRow}>
          <View style={styles.rowVerticalStart}>
            <StyledText font="medium" size="lg">
              {timeSplitted[0]}
            </StyledText>
            <StyledText font="medium" size="md" variant="text" style={styles.amOrPm}>
              {timeSplitted[1]}
            </StyledText>
          </View>
          <View style={styles.listCardDetails}>
            <StyledText font="bold" size="lg">
              {truncate(50, item.title)}
            </StyledText>
            <Space size={16} />
            <StyledText font="regular" size="md" variant="text">
              {truncate(72, item.description)}
            </StyledText>
            <Space size={13} />
            <StyledText size="sm" font="light">
              {getScheduleTimeAndLocation(item.start_date_time, item.end_date_time, item.rooms[0])}
            </StyledText>
            <Space size={13} />
            {item.speakers.length > 0 && (
              <Row style={styles.rowHorizontalStart}>
                {item.speakers.map((speaker, index) => (
                  <Row key={speaker.name}>
                    <MaterialCommunityIcons name="android" size={20} color={colors.primary} />
                    <Space size={10} horizontal />
                    <StyledText font="regular" size="sm" variant="primary">
                      {speaker.name}
                    </StyledText>
                    {index + 1 !== item.speakers.length && <Space size={12} horizontal />}
                  </Row>
                ))}
              </Row>
            )}
          </View>
        </Row>
        <AntDesign
          testID="bookmark"
          name={item.is_bookmarked ? 'star' : 'staro'}
          size={21}
          color={item.is_bookmarked ? colors.tertiary : colors.primary}
          onPress={handleBookMark}
          style={styles.rowVerticalStart}
        />
      </Row>
    </TouchableOpacity>
  );
};

const SessionCard = (props: SessionCardProps) => {
  if (props.screen === 'sessions') {
    const { handlePress, handleBookMark, item, variant = 'card' } = props;
    if (variant === 'list') {
      return <SessionCardList item={item} handleBookMark={handleBookMark} handlePress={handlePress} />;
    }
    return <SessionCardOnSessions item={item} handleBookMark={handleBookMark} handlePress={handlePress} />;
  }
  const { handlePress, item } = props;
  return <SessionCardOnHome item={item} handlePress={handlePress} />;
};

export default SessionCard;

const styles = StyleSheet.create({
  card: {
    width: width * 0.7,
    borderRadius: 10,
    marginRight: 10,
  },
  cardTertiary: {
    width: width - 30,
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
  bottomForSessions: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  description: {
    height: 40,
  },
  title: {
    textAlign: 'left',
    marginRight: 10,
  },
  sessionCardRow: {
    flex: 1,
  },
  avatarRow: {
    flex: 0.235,
  },
  avatar: {
    width: 33,
    height: 33,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listCard: {
    borderRadius: 10,
    padding: 16,
  },
  listCardDetails: {
    flex: 1,
    marginHorizontal: 16,
  },
  amOrPm: {
    textAlign: 'right',
    textTransform: 'uppercase',
  },
  rowVerticalStart: {
    alignSelf: 'flex-start',
  },
  rowHorizontalStart: {
    justifyContent: 'flex-start',
  },
});
