/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';
import { typography } from '../../config/typography';

type TextProps = {
  children: React.ReactNode;
  style?: any;
  small?: boolean;
  big?: boolean;
  bold?: boolean;
};

const StyledText = (props: TextProps) => {
  const { children, style, small, big, bold, ...rest } = props;

  const { colors } = useTheme();

  const { primary } = typography;

  return (
    <Text
      style={[
        small && { fontSize: 12 },
        big && { fontSize: 24 },
        bold && { fontFamily: primary.bold },
        {
          color: colors.text,
          // fontFamily: primary.regular,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default StyledText;
