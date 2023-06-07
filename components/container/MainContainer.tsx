import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MainContainerProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
};

const MainContainer = (props: MainContainerProps) => {
  const { children, style } = props;

  const { colors, dark } = useTheme();

  return (
    <SafeAreaView testID="main-container" style={[styles.container, { backgroundColor: colors.bg }, style]} {...props}>
      {children}
      <StatusBar style={dark ? 'light' : 'dark'} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
});

export default MainContainer;
