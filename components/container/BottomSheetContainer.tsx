import { useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

type BottomSheetContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const BottomSheetContainer = (props: BottomSheetContainerProps) => {
  const { children, style } = props;

  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }, style]} {...props}>
      <View style={styles.main}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    // maxWidth: 960,
    marginHorizontal: 'auto',
    minHeight: 120,
  },
});

export default BottomSheetContainer;
