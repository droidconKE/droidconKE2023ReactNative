import { useHeaderHeight } from '@react-navigation/elements';
import { useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DayButton from '../../../components/buttons/DayButton';
import CustomSwitch from '../../../components/buttons/StyledSwitch';
import Row from '../../../components/common/Row';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';
import SessionsListVertical from '../../../components/lists/SessionsListVertical';
import type { SessionForSchedule } from '../../../global';
import { Schedule } from '../../../mock/schedule';

// TODO: ALL Sessions page

/**
 * -  implement a List that displays all sessions
 * - list should either be collapsible or not
 * - Session card component should be either the small card that displays time, title, description, venue and a favorite icon button
 * - session card can also be a full card as seen in the home page, with image and speaker avatars too
 * - consider reusing the session card component from the home page
 */

let HEADERHEIGHT;
const Sessions = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [listVisible, setListVisible] = useState(true);

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleView = () => setListVisible((previousState) => !previousState);
  const { colors } = useTheme();
  const headerHeight = useHeaderHeight();

  HEADERHEIGHT = headerHeight;

  console.log(HEADERHEIGHT);
  return (
    <MainContainer preset="fixed">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderActionRight listVisible={listVisible} toggleView={toggleView} />,
        }}
      />

      <View style={[styles.main]}>
        <View style={styles.dayHeader}>
          <Row style={[styles.row]}>
            <Row>
              <DayButton date="16th" day="Day 1" handlePress={() => console.log('pressed')} selected />
              <Space size={20} horizontal />
              <DayButton date="17th" day="Day 2" handlePress={() => console.log('pressed')} />
              <Space size={20} horizontal />
              <DayButton date="18th" day="Day 3" handlePress={() => console.log('pressed')} />
            </Row>
            <View style={styles.column}>
              <CustomSwitch
                value={isEnabled}
                onValueChange={toggleSwitch}
                trackColor={{
                  true: colors.tertiary,
                  false: colors.bgInverse,
                }}
                thumbColor={colors.whiteConstant}
                iconColor={{
                  true: colors.tertiary,
                  false: colors.iconSwitch,
                }}
              />
              <Space size={6} />
              <StyledText size="xs" font="light">
                My Sessions
              </StyledText>
            </View>
          </Row>
        </View>
        <SessionsListVertical
          variant={listVisible === true ? 'list' : 'card'}
          bookmarked={false}
          handleBookMark={() => console.log('pressed')}
          sessions={Schedule.data['2022-11-17'] as unknown as Array<SessionForSchedule>}
        />
      </View>
    </MainContainer>
  );
};

export default Sessions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
    width: '100%',
  },
  dayButton: {
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 8,
  },
  row: {
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  dayHeader: {
    //position: 'absolute',
  },
});
