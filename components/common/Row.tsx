import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const Row = ({ children, style }: RowProps) => {
  return (
    <View testID="row" style={StyleSheet.compose(styles.row, style)}>
      {children}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
