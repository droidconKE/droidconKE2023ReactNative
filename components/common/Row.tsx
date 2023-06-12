import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View as NativeView } from 'react-native';

type RowProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

/**
 * @param style: StyleProp<ViewStyle> - custom style
 * @param children: React.ReactNode - text
 */

const Row = (props: RowProps & NativeView['props']) => {
  const { style } = props;
  const viewStyle = StyleSheet.compose(styles.row, style);

  return <NativeView testID="row" style={viewStyle} {...props} />;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
