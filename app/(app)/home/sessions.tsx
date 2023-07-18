import { useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DayButton from '../../../components/buttons/DayButton';
import CustomSwitch from '../../../components/buttons/StyledSwitch';
import Row from '../../../components/common/Row';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';
import SessionsListVertical from '../../../components/lists/SessionsListVertical';
import FilterModal from '../../../components/modals/FilterModal';
import type { IDateForDayButton, SessionForSchedule } from '../../../global';
import { Schedule } from '../../../mock/schedule';
import { getDaysFromSchedule } from '../../../util/helpers';

const Sessions = () => {
  const [showsBookmarked, setShowsBookmarked] = useState<boolean>(false);
  const [listVisible, setListVisible] = useState<boolean>(true);
  const [dates, setDates] = useState<Array<IDateForDayButton>>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');

  const toggleSwitch = () => setShowsBookmarked((previousState) => !previousState);
  const toggleView = () => setListVisible((previousState) => !previousState);
  const { colors } = useTheme();

  useEffect(() => {
    setDates(getDaysFromSchedule(Schedule));
  }, []);

  useEffect(() => {
    if (dates[0]?.key !== undefined) {
      setSelectedDate(dates[0]?.key);
    }
  }, [dates]);

  const handleDayButtonPress = (dayButtonKey: string) => setSelectedDate(dayButtonKey);

  const handleBookMark = (id: number) => {
    console.log(id);
    // TODO: bookmark a session here
  };

  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  const showFilterModal = () => {
    setFilterModalVisible(true);
  };

  const handleFilter = () => {
    // TODO: handle filter sessions here
  };

  return (
    <MainContainer preset="fixed">
      <Stack.Screen
        options={{
          headerRight: () => (
            <HeaderActionRight listVisible={listVisible} toggleView={toggleView} handlePress={showFilterModal} />
          ),
        }}
      />

      <View style={[styles.main]}>
        <Space size={16} />
        <Row style={[styles.row, styles.paddingMain]}>
          <Row>
            {dates?.map((item) => (
              <Row key={item.key}>
                <DayButton
                  date={item.date}
                  day={item.day}
                  handlePress={handleDayButtonPress}
                  selected={item.key === selectedDate}
                  dateInfull={item.key}
                />
                <Space size={15} horizontal />
              </Row>
            ))}
          </Row>
          <View style={styles.column}>
            <CustomSwitch
              value={showsBookmarked}
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
              { showsBookmarked ? 'My Sessions' : 'All Sessions' }
            </StyledText>
          </View>
        </Row>
        <Space size={16} />

        <View style={[styles.separator, { borderColor: colors.card }]} />

        <Space size={14} />
        <SessionsListVertical
          variant={listVisible === true ? 'list' : 'card'}
          bookmarked={showsBookmarked}
          handleBookMark={handleBookMark}
          sessions={
            showsBookmarked === true
              ? (Schedule.data[selectedDate]?.filter(
                  (item) => item.is_bookmarked === true,
                ) as unknown as Array<SessionForSchedule>)
              : (Schedule.data[selectedDate] as unknown as Array<SessionForSchedule>)
          }
        />
      </View>

      <View>
        <FilterModal
          visible={filterModalVisible}
          onClose={() => setFilterModalVisible(false)}
          onFilter={handleFilter}
        />
      </View>
    </MainContainer>
  );
};

export default Sessions;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  paddingMain: {
    paddingHorizontal: 15,
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
  separator: {
    borderWidth: 1,
    width: '100%',
  },
});
