import React from 'react';
import { StyleSheet, View } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  style?: object;
};

const Row = ({ children, style }: RowProps) => {
  return <View style={[styles.row, style]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
