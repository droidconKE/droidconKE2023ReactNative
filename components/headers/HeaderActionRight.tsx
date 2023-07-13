import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClearButton from '../buttons/ClearButton';
import IconButton from '../buttons/IconButton';
import Row from '../common/Row';

interface HeaderActionRightProps {
  toggleView: () => void;
  listVisible: boolean;
}
const HeaderActionRight = (props: HeaderActionRightProps) => {
  const { toggleView, listVisible } = props;

  const openFilterModal = () => {
    // TODO: open filter modal functionality
  };

  return (
    <Row style={styles.row} testID="headerActionRight">
      <Row>
        <IconButton name="list-alt" isActive={listVisible} onPress={toggleView} />
        <IconButton name="view-agenda" isActive={!listVisible} onPress={toggleView} />
      </Row>
      <View style={styles.gap} />
      <ClearButton label="Filter" iconName="filter" onPress={() => openFilterModal()} />
    </Row>
  );
};

export default HeaderActionRight;

const styles = StyleSheet.create({
  row: {
    marginHorizontal: 16,
  },
  gap: {
    width: 8,
  },
});
