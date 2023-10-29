import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from '../../config/typography';
import FilterButton from '../buttons/FilterButton';
import PrimaryButton from '../buttons/PrimaryButton';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

const { height } = Dimensions.get('window');
const bottomTabHeight = 80;
const modalHeight = height - bottomTabHeight;

type LevelFilter = 'Beginner' | 'Intermediate' | 'Advanced';
type TopicFilter = 'UI/UX Design' | 'Backend' | 'APIs';
type RoomFilter = 'Room 1' | 'Room 2' | 'Room 3';
type SessionTypeFilter = 'Keynote' | 'Codelab' | 'Session' | 'Lightining talk' | 'Panel Discussion';

type Filters = {
  level: Array<LevelFilter>;
  topic: Array<TopicFilter>;
  room: Array<RoomFilter>;
  sessionType: Array<SessionTypeFilter>;
};

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onFilter: (filters: Filters) => void;
};

const FilterModal = ({ visible, onClose, onFilter }: FilterModalProps) => {
  const { colors } = useTheme();
  const { primary } = typography;

  const [selectedLevel, setSelectedLevel] = useState<Filters['level']>([]);
  const [selectedTopic, setSelectedTopic] = useState<Filters['topic']>([]);
  const [selectedRoom, setSelectedRoom] = useState<Filters['room']>([]);
  const [selectedSessionType, setSelectedSessionType] = useState<Filters['sessionType']>([]);

  const handleFilter = () => {
    const filter = {
      level: selectedLevel,
      topic: selectedTopic,
      room: selectedRoom,
      sessionType: selectedSessionType,
    };

    onFilter(filter);
    onClose();
  };

  const addFilter = <TFilter extends string>(filter: TFilter, filterArray: Array<TFilter>) => {
    const newFilterArray = [...filterArray];
    // check if filter is already in filter array
    const index = newFilterArray.indexOf(filter);
    if (index === -1) {
      // if not in array, add to array
      newFilterArray.push(filter);
    } else {
      // if in array, remove from array
      newFilterArray.splice(index, 1);
    }
    return newFilterArray;
  };

  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView, { backgroundColor: colors.bg }]}>
            <Row style={styles.header}>
              <Row>
                <AntDesign name="filter" size={24} color={colors.primary} />
                <Space size={8} horizontal />
                <StyledText size="lg" style={{ color: colors.primary }}>
                  Filter
                </StyledText>
              </Row>
              <TouchableOpacity onPress={onClose}>
                <StyledText
                  style={{
                    color: colors.textLight,
                    fontFamily: primary.light,
                  }}
                >
                  CANCEL
                </StyledText>
              </TouchableOpacity>
            </Row>

            <Space size={12} />

            <View style={styles.modalContent}>
              <StyledText size="lg" font="bold">
                Level
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Beginner"
                  onPress={() => setSelectedLevel(addFilter('Beginner', selectedLevel))}
                  selected={selectedLevel.includes('Beginner')}
                  style={styles.left}
                />
                <FilterButton
                  label="Intermediate"
                  onPress={() => setSelectedLevel(addFilter('Intermediate', selectedLevel))}
                  selected={selectedLevel.includes('Intermediate')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Advanced"
                  onPress={() => setSelectedLevel(addFilter('Advanced', selectedLevel))}
                  selected={selectedLevel.includes('Advanced')}
                  style={styles.right}
                />
              </View>

              <Space size={20} />

              <StyledText size="lg" font="bold">
                Topic
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="UI/UX Design"
                  onPress={() => setSelectedTopic(addFilter('UI/UX Design', selectedTopic))}
                  selected={selectedTopic.includes('UI/UX Design')}
                  style={styles.left}
                />
                <FilterButton
                  label="Backend"
                  onPress={() => setSelectedTopic(addFilter('Backend', selectedTopic))}
                  selected={selectedTopic.includes('Backend')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="APIs"
                  onPress={() => setSelectedTopic(addFilter('APIs', selectedTopic))}
                  selected={selectedTopic.includes('APIs')}
                  style={styles.right}
                />
              </View>

              <Space size={20} />

              <StyledText size="lg" font="bold">
                Rooms
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Room 1"
                  onPress={() => setSelectedRoom(addFilter('Room 1', selectedRoom))}
                  selected={selectedRoom.includes('Room 1')}
                  style={styles.left}
                />
                <FilterButton
                  label="Room 2"
                  onPress={() => setSelectedRoom(addFilter('Room 2', selectedRoom))}
                  selected={selectedRoom.includes('Room 2')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Room 3"
                  onPress={() => setSelectedRoom(addFilter('Room 3', selectedRoom))}
                  selected={selectedRoom.includes('Room 3')}
                  style={styles.right}
                />
              </View>

              <Space size={20} />

              <StyledText size="lg" font="bold">
                Session Type
              </StyledText>

              <Space size={8} />

              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Keynote"
                  onPress={() => setSelectedSessionType(addFilter('Keynote', selectedSessionType))}
                  selected={selectedSessionType.includes('Keynote')}
                  style={styles.left}
                />
                <FilterButton
                  label="Codelab"
                  onPress={() => setSelectedSessionType(addFilter('Codelab', selectedSessionType))}
                  selected={selectedSessionType.includes('Codelab')}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Session"
                  onPress={() => setSelectedSessionType(addFilter('Session', selectedSessionType))}
                  selected={selectedSessionType.includes('Session')}
                  style={styles.right}
                />
              </View>
              <Space size={12} />
              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Lightining talk"
                  onPress={() => setSelectedSessionType(addFilter('Lightining talk', selectedSessionType))}
                  selected={selectedSessionType.includes('Lightining talk')}
                  style={styles.left}
                />
                <FilterButton
                  label="Panel Discussion"
                  onPress={() => setSelectedSessionType(addFilter('Panel Discussion', selectedSessionType))}
                  selected={selectedSessionType.includes('Panel Discussion')}
                  style={[styles.withborder, { borderColor: colors.text }]}
                />
              </View>

              <Space size={20} />

              <PrimaryButton label="Filter" onPress={handleFilter} />
            </View>
            <Space size={20} />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  modalView: {
    width: '100%',
    height: modalHeight,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
    alignItems: 'center',
  },
  modalContent: {
    flex: 1,
    width: '100%',
  },
  rowGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    height: 45,
  },
  left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  right: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  withborder: {
    borderLeftWidth: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default FilterModal;
