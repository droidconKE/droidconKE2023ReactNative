import { useTheme } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { initialWindowMetrics, SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

type MainContainerProps = {
  children: React.ReactNode;
};

const SafeAreaContainer = ({ children, ...rest }: MainContainerProps) => {
  const { colors, dark } = useTheme();

  const insets = useSafeAreaInsets();

  return (
    <View style={[{ backgroundColor: colors.bg, paddingTop: insets.top }, styles.container]} {...rest}>
      <ScrollView contentContainerStyle={styles.containerStyle} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      <StatusBar style={dark ? 'light' : 'dark'} />
    </View>
  );
};

const MainContainer = (props: MainContainerProps) => {
  return (
    <SafeAreaProvider testID="main-container" initialMetrics={initialWindowMetrics}>
      <SafeAreaContainer {...props} />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  containerStyle: {
    width: '100%',
    alignItems: 'center',
  },
});

export default MainContainer;
