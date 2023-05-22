import { StatusBar } from 'expo-status-bar';
import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../config/theme';
import { ThemeContext } from '../../contexts/ThemeContext';

type MainContainerProps = {
  children: React.ReactNode;
  style?: any;
};

const MainContainer = (props: MainContainerProps) => {
  const { children, style } = props;
  const { theme }: any = useContext(ThemeContext);
  const activeColors = colors[theme.mode];

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: activeColors.background }, style]} {...props}>
      {children}
      <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
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
