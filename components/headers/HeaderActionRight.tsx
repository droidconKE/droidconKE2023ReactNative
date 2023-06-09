import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClearButton from '../buttons/ClearButton';
import IconButton from '../buttons/IconButton';
import Row from '../common/Row';

const HeaderActionRight = () => {
  const router = useRouter();

  const openFilterModal = () => {
    // TODO: open filter modal functionality
  };

  return (
    <Row style={styles.row}>
      <Row>
        <IconButton name="list-alt" isActive={false} onPress={() => router.push('/feedback')} />
        <IconButton name="view-agenda" isActive onPress={() => router.push('/feedback')} />
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
