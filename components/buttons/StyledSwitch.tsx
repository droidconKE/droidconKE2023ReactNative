import React, { useState } from 'react';
import { Animated, StyleSheet, TouchableOpacity, View } from 'react-native';
import StarIcon from '../../assets/artworks/StarIcon';

type StyledSwitchProps = {
  trackColor: {
    false: string;
    true: string;
  };
  thumbColor: string;
  iconColor: {
    false: string;
    true: string;
  };
  onValueChange: () => void;
  value: boolean;
};
const StyledSwitch = (props: StyledSwitchProps) => {
  const { trackColor, thumbColor, iconColor, onValueChange, value } = props;

  const switchAnimation = useState(new Animated.Value(0))[0];

  const handleSwitch = () => {
    onValueChange();
    Animated.timing(switchAnimation, {
      toValue: value ? 0 : 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const translateX = switchAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handleSwitch} testID="styled-switch">
      <View
        testID="track"
        style={[
          styles.track,
          {
            backgroundColor: value ? trackColor.true : trackColor.false,
          },
        ]}
      >
        <Animated.View
          style={[
            styles.thumb,
            {
              backgroundColor: thumbColor,
              transform: [{ translateX }],
            },
          ]}
        >
          <StarIcon
            fontSize={12.5}
            color={value ? iconColor.true : iconColor.false}
            fill={!value ? iconColor.false : iconColor.true}
          />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default StyledSwitch;

const styles = StyleSheet.create({
  track: {
    width: 50,
    height: 20,
    borderRadius: 30,
    justifyContent: 'center',
  },
  thumb: {
    width: 25,
    height: 25,
    borderRadius: 12.5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 1,
    shadowOpacity: 0.1,
    shadowRadius: 1,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
});
