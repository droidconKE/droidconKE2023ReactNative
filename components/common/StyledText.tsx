import { useTheme } from '@react-navigation/native';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { StyleSheet, Text as NativeText } from 'react-native';
import { typography } from '../../config/typography';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  small?: boolean;
  title?: boolean;
  bold?: boolean;
  subtitle?: boolean;
};

/**
 * @returns Text component
 * @param small: boolean - small font size 12px
 * @param title: boolean - title font size 18px and bold
 * @param subtitle: boolean - subtitle font size 16px and semi-bold
 * @param bold: boolean - bold font
 * @param style: StyleProp<TextStyle> - custom style
 * @param children: React.ReactNode - text
 */
const StyledText = (props: TextProps & NativeText['props']) => {
  const { style, small, title, subtitle, bold } = props;

  const { colors } = useTheme();

  const { primary } = typography;

  const textStyle = [
    small && { fontSize: 12 },
    title && { fontSize: 18, fontFamily: primary.bold },
    subtitle && { fontSize: 16, fontFamily: primary.semiBold },
    bold && { fontFamily: primary.bold },
    { color: colors.text },
  ].filter(Boolean);

  return <NativeText style={StyleSheet.compose(textStyle, style)} {...props} />;
};

export default StyledText;
