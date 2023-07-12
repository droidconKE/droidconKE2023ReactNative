import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { typography } from '../../config/typography';
import FilterButton from '../buttons/FilterButton';
import PrimaryButton from '../buttons/PrimaryButton';
import Row from '../common/Row';
import Space from '../common/Space';
import StyledText from '../common/StyledText';

type Filters = {
  level: string;
  topic: string;
  room: string;
  sessionType: string;
};

type FilterModalProps = {
  visible: boolean;
  onClose: () => void;
  onFilter: (filters: Filters) => void;
};

const FilterModal = ({ visible, onClose, onFilter }: FilterModalProps) => {
  const { colors } = useTheme();
  const { primary } = typography;

  const [selectedLevel, setSelectedLevel] = useState<string>('Intermediate');
  const [selectedTopic, setSelectedTopic] = useState<string>('UI/UX Design');
  const [selectedRoom, setSelectedRoom] = useState<string>('Room 1');
  const [selectedSessionType, setSelectedSessionType] = useState<string>('Session');

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

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent visible={visible} onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <SafeAreaView style={[styles.modalView, { backgroundColor: colors.bg }]}>
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
                  onPress={() => setSelectedLevel('Beginner')}
                  selected={selectedLevel === 'Beginner'}
                  style={styles.left}
                />
                <FilterButton
                  label="Intermediate"
                  onPress={() => setSelectedLevel('Intermediate')}
                  selected={selectedLevel === 'Intermediate'}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Advanced"
                  onPress={() => setSelectedLevel('Advanced')}
                  selected={selectedLevel === 'Advanced'}
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
                  onPress={() => setSelectedTopic('UI/UX Design')}
                  selected={selectedTopic === 'UI/UX Design'}
                  style={styles.left}
                />
                <FilterButton
                  label="Backend"
                  onPress={() => setSelectedTopic('Backend')}
                  selected={selectedTopic === 'Backend'}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="APIs"
                  onPress={() => setSelectedTopic('APIs')}
                  selected={selectedTopic === 'APIs'}
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
                  onPress={() => setSelectedRoom('Room 1')}
                  selected={selectedRoom === 'Room 1'}
                  style={styles.left}
                />
                <FilterButton
                  label="Room 2"
                  onPress={() => setSelectedRoom('Room 2')}
                  selected={selectedRoom === 'Room 2'}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Room 3"
                  onPress={() => setSelectedRoom('Room 3')}
                  selected={selectedRoom === 'Room 3'}
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
                  onPress={() => setSelectedSessionType('Keynote')}
                  selected={selectedSessionType === 'Keynote'}
                  style={styles.left}
                />
                <FilterButton
                  label="Codelab"
                  onPress={() => setSelectedSessionType('Codelab')}
                  selected={selectedSessionType === 'Codelab'}
                  isCenter
                  style={{ borderColor: colors.text }}
                />
                <FilterButton
                  label="Session"
                  onPress={() => setSelectedSessionType('Session')}
                  selected={selectedSessionType === 'Session'}
                  style={styles.right}
                />
              </View>
              <Space size={12} />
              <View style={[styles.rowGroup, { borderColor: colors.text }]}>
                <FilterButton
                  label="Lightining talk"
                  onPress={() => setSelectedSessionType('Lightining talk')}
                  selected={selectedSessionType === 'Lightining talk'}
                  style={styles.left}
                />
                <FilterButton
                  label="Panel Discussion"
                  onPress={() => setSelectedSessionType('Panel Discussion')}
                  selected={selectedSessionType === 'Panel Discussion'}
                  style={[styles.withborder, { borderColor: colors.text }]}
                />
              </View>

              <Space size={30} />

              <PrimaryButton label="Filter" onPress={handleFilter} />

              <Space size={20} />
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </View>
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
    height: '90%',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 40,
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
