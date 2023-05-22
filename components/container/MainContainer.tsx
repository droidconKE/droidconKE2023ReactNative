import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type MainContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const MainContainer = (props: MainContainerProps) => {
  const { children, style } = props;

  const { colors, dark } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }, style]} {...props}>
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
