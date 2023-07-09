import React from 'react';
import { Animated, StyleSheet } from 'react-native';
import StarIcon from '../../../assets/artworks/StarIcon';

type ThumbProps = {
  range: Array<number>;
  animatedValue: Animated.Value;
  width: number;
  height: number;
  colors: {
    true: string;
    false: string;
  };
  size: number;
  value: boolean;
  iconColors: {
    true: string;
    false: string;
  };
  pressIndicator: boolean;
};

export default function Thumb(props: ThumbProps) {
  const { range, animatedValue, width, size, value, colors } = props;

  const radius = Math.round(size / 2);

  const color = animatedValue.interpolate({
    inputRange: range,
    outputRange: [colors.false, colors.true],
  });

  const position = animatedValue.interpolate({
    inputRange: range,
    outputRange: [0, width - size],
  });

  const pressedIndicatorPosition = animatedValue.interpolate({
    inputRange: range,
    outputRange: [0 - radius, width - radius - size],
  });

  return (
    <>
      {props.pressIndicator && (
        <Animated.View
          style={[
            styles.pressedIndicator,
            {
              backgroundColor: color,
              left: pressedIndicatorPosition,
              width: size * 2,
              borderRadius: size,
              top: 0 - radius,
            },
          ]}
        />
      )}
      <Animated.View
        style={[
          styles.thumb,
          {
            backgroundColor: color,
            left: position,
            width: size,
            borderRadius: radius,
          },
        ]}
      >
        <StarIcon
          color={value ? props.iconColors.true : props.iconColors.false}
          fill={!value ? props.iconColors.false : props.iconColors.true}
          fontSize={12}
        />
      </Animated.View>
    </>
  );
}

export const styles = StyleSheet.create({
  thumb: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    alignContent: 'center',
    aspectRatio: 1,
  },
  pressedIndicator: {
    position: 'absolute',
    opacity: 0.2,
    aspectRatio: 1,
  },
});
