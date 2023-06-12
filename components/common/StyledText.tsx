import { useTheme } from '@react-navigation/native';
import React from 'react';
import type { StyleProp, TextStyle } from 'react-native';
import { StyleSheet, Text as NativeText } from 'react-native';
import { typography } from '../../config/typography';

type TextProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  extraSmall?: boolean;
  small?: boolean;
  title?: boolean;
  bold?: boolean;
  subtitle?: boolean;
  regular?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  light?: boolean;
  robotoMedium?: boolean;
  rubikLight?: boolean;
  tint2?: boolean;
};

/**
 * @returns Text component
 * @param extraSmall: boolean - extra small font size 10px
 * @param small: boolean - small font size 12px
 * @param title: boolean - title font size 18px and bold
 * @param subtitle: boolean - subtitle font size 16px and semi-bold
 * @param bold: boolean - bold font
 * @param regular: boolean - regular font
 * @param medium: boolean - medium font
 * @param semiBold: boolean - semiBold font
 * @param light: boolean - light font
 * @param robotoMedium: boolean - roboto medium font
 * @param rubikLight: boolean - rubik light font
 * @param style: StyleProp<TextStyle> - custom style
 * @param children: React.ReactNode - text
 * @param tint2: boolean
 */
const StyledText = (props: TextProps & NativeText['props']) => {
  const { style, extraSmall, small, title, subtitle, bold, regular, medium, semiBold, light, tint2 } = props;

  const { colors } = useTheme();

  const { primary } = typography;

  const textStyle = [
    extraSmall && { fontSize: 10 },
    small && { fontSize: 12 },
    title && { fontSize: 18, fontFamily: primary.bold },
    subtitle && { fontSize: 16, fontFamily: primary.semiBold },
    bold && { fontFamily: primary.bold },
    regular && { fontFamily: primary.regular },
    medium && { fontFamily: primary.medium },
    semiBold && { fontFamily: primary.semiBold },
    light && { fontFamily: primary.light },
    tint2 && { color: colors.tint2 },
    { color: colors.text },
  ].filter(Boolean);

  return <NativeText style={StyleSheet.compose(textStyle, style)} {...props} />;
};

export default StyledText;
