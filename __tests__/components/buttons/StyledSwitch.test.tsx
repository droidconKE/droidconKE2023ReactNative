import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import StyledSwitch from '../../../components/buttons/StyledSwitch';

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
        thumbColor={'purple'}
        iconColor={{
          true: 'red',
          false: 'purple',
        }}
      />,
    );
    expect(screen.getByTestId('styled-switch')).toBeDefined();
  });

  it('renders blue trackColor when value is false', () => {
    render(
      <StyledSwitch
        value={false}
        onValueChange={onPress}
        trackColor={{
          true: 'rgb(255, 110, 77)',
          false: 'blue',
        }}
        thumbColor={'purple'}
        iconColor={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    expect(screen.getByTestId('track')).toHaveStyle({
      backgroundColor: 'blue',
    });
  });

  it('renders red trackColor when value is true', () => {
    render(
      <StyledSwitch
        value={true}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={'purple'}
        iconColor={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    expect(screen.getByTestId('track')).toHaveStyle({
      backgroundColor: 'red',
    });
  });

  it('renders icon color orange when value is true', () => {
    render(
      <StyledSwitch
        value={true}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={'purple'}
        iconColor={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    expect(screen.getByTestId('thumb')).toHaveStyle({
      backgroundColor: 'purple',
    });
  });

  it('renders orange icon color when value is true', () => {
    render(
      <StyledSwitch
        value={true}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={'purple'}
        iconColor={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    const icon = screen.getByTestId('icon');

    expect(icon.props.color).toBe('orange');
  });

  it('renders maroon icon color when value is false', () => {
    render(
      <StyledSwitch
        value={false}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={'purple'}
        iconColor={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    const icon = screen.getByTestId('icon');

    expect(icon.props.color).toBe('maroon');
  });

  it('fires onValueChange function when toggled', () => {
    render(
      <StyledSwitch
        value={false}
        onValueChange={onPress}
        trackColor={{
          true: 'red',
          false: 'blue',
        }}
        thumbColor={'purple'}
        iconColor={{
          true: 'orange',
          false: 'maroon',
        }}
      />,
    );
    fireEvent.press(screen.getByTestId('styled-switch'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
