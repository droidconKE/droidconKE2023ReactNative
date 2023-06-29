import { useTheme } from '@react-navigation/native';
import type { StatusBarProps } from 'expo-status-bar';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import type { KeyboardAvoidingViewProps, ScrollViewProps } from 'react-native';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, View } from 'react-native';
import type { Edge, SafeAreaViewProps } from 'react-native-safe-area-context';
import { initialWindowMetrics, SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

interface BaseScreenProps {
  children?: React.ReactNode;
  SafeAreaViewProps?: SafeAreaViewProps;
  StatusBarProps?: StatusBarProps;
  keyboardOffset?: number;
  KeyboardAvoidingViewProps?: KeyboardAvoidingViewProps;
  safeAreaEdges?: Array<Edge>;
}

interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}

interface ScrollScreenProps extends BaseScreenProps {
  preset: 'scroll';
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  ScrollViewProps?: ScrollViewProps;
}

export type ScreenProps = ScrollScreenProps | FixedScreenProps;

const isIos = Platform.OS === 'ios';

function isNonScrolling(preset?: ScreenProps['preset']) {
  return !preset || preset === 'fixed';
}

function ScreenWithoutScrolling(props: ScreenProps) {
  const { children, ...rest } = props;
  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  );
}

function ScreenWithScrolling(props: ScreenProps) {
  const { children, keyboardShouldPersistTaps = 'handled', ScrollViewProps, ...rest } = props as ScrollScreenProps;
  return (
    <View style={styles.container} {...rest}>
      <ScrollView
        {...{ keyboardShouldPersistTaps }}
        {...ScrollViewProps}
        contentContainerStyle={styles.containerStyle}
        showsVerticalScrollIndicator={false}
      >
        {children}
      </ScrollView>
    </View>
  );
}

const MainContainer = (props: ScreenProps) => {
  const { colors, dark } = useTheme();

  const { SafeAreaViewProps, StatusBarProps, safeAreaEdges, keyboardOffset = 0, KeyboardAvoidingViewProps } = props;

  const backgroundColor = dark ? colors.bg : colors.background;

  const statusBarStyle = dark ? 'light' : 'dark';

  const Wrapper = safeAreaEdges?.length ? SafeAreaView : View;

  return (
    <SafeAreaProvider testID="main-container" initialMetrics={initialWindowMetrics}>
      <Wrapper edges={safeAreaEdges} {...SafeAreaViewProps} style={[{ backgroundColor }, styles.container]}>
        <StatusBar style={statusBarStyle} {...StatusBarProps} />

        <KeyboardAvoidingView
          behavior={isIos ? 'padding' : undefined}
          keyboardVerticalOffset={keyboardOffset}
          {...KeyboardAvoidingViewProps}
          style={[styles.keyboard, KeyboardAvoidingViewProps?.style]}
        >
          {isNonScrolling(props.preset) ? <ScreenWithoutScrolling {...props} /> : <ScreenWithScrolling {...props} />}
        </KeyboardAvoidingView>
      </Wrapper>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerStyle: {
    width: '100%',
    alignItems: 'center',
  },
  keyboard: {
    flex: 1,
  },
});

export default MainContainer;
