import React from 'react';
import { View } from 'react-native';

type SpaceProps = {
  size: number;
  horizontal?: boolean;
};

const Space = ({ size, horizontal = false }: SpaceProps) => {
  const horizontalStyle = { width: size };
  const verticalStyle = { height: size };

  return <View style={horizontal ? horizontalStyle : verticalStyle} />;
};

export default Space;
