import { useTheme } from '@react-navigation/native';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

type BottomSheetContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const BottomSheetContainer = (props: BottomSheetContainerProps) => {
  const { children, style } = props;

  const { colors } = useTheme();

  const flattenStyle = StyleSheet.flatten([styles.container, { backgroundColor: colors.bg }]);

  return (
    <View style={StyleSheet.compose(flattenStyle, style)} {...props}>
      <View style={styles.main}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 8,
    marginHorizontal: 'auto',
    minHeight: 150,
  },
});

export default BottomSheetContainer;
