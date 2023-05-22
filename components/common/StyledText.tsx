/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext } from 'react';
import { Text } from 'react-native';

import { colors } from '../../config/theme';
import { ThemeContext } from '../../contexts/ThemeContext';

type TextProps = {
  children: React.ReactNode;
  style?: any;
  small?: boolean;
  big?: boolean;
  bold?: boolean;
};

const StyledText = (props: TextProps) => {
  const { children, style, small, big, bold, ...rest } = props;
  const { theme }: any = useContext(ThemeContext);
  const activecolors = colors[theme.mode];

  return (
    <Text
      style={[
        small && { fontSize: 12 },
        big && { fontSize: 24 },
        bold && { fontWeight: 'bold' },
        { color: activecolors.text },
        style,
      ]}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default StyledText;
