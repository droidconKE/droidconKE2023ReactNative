/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as NativeText } from 'react-native';
import { typography } from '../../config/typography';

type TextProps = {
  children: React.ReactNode;
  style?: any;
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
 * @param style: any - custom style
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
    {
      color: colors.text,
      // fontFamily: primary.regular,
    },
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default StyledText;
