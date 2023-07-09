import { render, screen } from '@testing-library/react-native';
import React from 'react';
import StyledSwitch from '../../../components/buttons/StyledSwitch';

// Test it renders
// Test trackColors when false
// Test trackColors when true
// Test thumbColor when false
// Test thumbColor when true
// Test iconColor when true
// Test iconColor when false
// Test onValueChange function
// Test animationDuration

//jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');

describe('<StyledSwitch/>', () => {
  const onPress = jest.fn();

  it('renders StyledSwitch component', () => {
    render(
      <StyledSwitch
        value={false}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={{
          true: 'green',
          false: 'purple',
        }}
        iconColors={{
          true: 'red',
          false: 'purple',
        }}
      />,
    );
    expect(screen.getByTestId('styled-switch')).toBeDefined();
  });

  it('renders red trackColor when true', () => {
    render(
      <StyledSwitch
        value={false}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={{
          true: 'yellow',
          false: 'green',
        }}
        iconColors={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    expect(screen.getByTestId('track')).toHaveStyle({
      backgroundColor: 'red',
    });
  });
});
