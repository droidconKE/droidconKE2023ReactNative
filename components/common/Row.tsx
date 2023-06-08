import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
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
