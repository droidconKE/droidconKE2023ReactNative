import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import Thumb from './Thumb';
import Track from './Track';

type IconSwitchProps = {
  value: boolean;
  animationDuration?: number;
  onValueChange: (value: boolean) => void;
  style?: { height: number; width: number };
  trackColor: {
    true: string;
    false: string;
  };
  thumbColor: {
    true: string;
    false: string;
  };
  iconColors: {
    true: string;
    false: string;
  };
};

export default function StyledSwitch(props: IconSwitchProps) {
  const { value, animationDuration, onValueChange, style, trackColor, iconColors, thumbColor } = props;

  const [pressIndicator, setPressIndicator] = useState<boolean>(false);

  let _maxAnimatedValue = 0;
  let _minAnimatedValue = 180;
  let _animationDuration = 100;
  let _animatedRange: Array<number>;

  const _animatedValue = new Animated.Value(props.value ? _maxAnimatedValue : _minAnimatedValue);

  useEffect(() => {
    setPressIndicator(false);
    let _listenerId: string;

    // eslint-disable-next-line prefer-const, @typescript-eslint/no-shadow
    _listenerId = _animatedValue.addListener(({ value }) => {
      if (pressIndicator && (value === _minAnimatedValue || value === _maxAnimatedValue)) {
        setPressIndicator(false);
      }
    });

    if (pressIndicator) {
      Animated.timing(_animatedValue, {
        toValue: props.value ? _maxAnimatedValue : _minAnimatedValue,
        duration: _animationDuration,
        useNativeDriver: false,
      }).start();
    }

    return () => {
      _animatedValue.removeListener(_listenerId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  _animationDuration = animationDuration || 200;

  _maxAnimatedValue = 100;
  _minAnimatedValue = 0;
  // eslint-disable-next-line prefer-const
  _animatedRange = [_minAnimatedValue, _maxAnimatedValue];

  function _handlePress() {
    setPressIndicator(true);

    const valueCompared = !props.value;

    if (onValueChange) {
      onValueChange(valueCompared);
    }
  }

  return (
    <View style={style} testID="styled-switch">
      <TouchableWithoutFeedback onPress={_handlePress}>
        <View style={styles.container}>
          <Track
            range={_animatedRange}
            animatedValue={_animatedValue}
            width={style?.width || 60}
            height={17}
            colors={trackColor}
          />
          <Thumb
            range={_animatedRange}
            animatedValue={_animatedValue}
            pressIndicator={pressIndicator}
            size={25}
            value={!!value}
            colors={thumbColor}
            width={style?.width || 45}
            height={style?.height || 17}
            iconColors={iconColors}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: 'center' },
});
