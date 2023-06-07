import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import ClearButton from '../buttons/ClearButton';
import IconButton from '../buttons/IconButton';
import Row from '../common/Row';

/**
 * TODO: add open modal function
 */

const HeaderActionRight = () => {
  const router = useRouter();

  const openFilterModal = () => {
    // TODO: open filter modal
  };

  return (
    <Row>
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
  gap: {
    width: 8,
  },
});
