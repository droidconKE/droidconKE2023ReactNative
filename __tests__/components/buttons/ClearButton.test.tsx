import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ClearButton from '../../../components/buttons/ClearButton';

describe('<ClearButton/>', () => {
  it('renders clearbutton component', () => {
    render(<ClearButton onPress={() => console.log('Powered off')} label="Power off" iconName="poweroff" />);
    expect(screen.getByTestId('clearButton')).toBeTruthy();
  });

  it('renders label powered off', () => {
    render(<ClearButton onPress={() => console.log('Powered off')} label="Power off" iconName="poweroff" />);
    expect(screen.getByText('Power off')).toBeDefined();
  });

  it('calls the function provided by onPress prop after pressing the button', () => {
    const onPress = jest.fn();
    render(<ClearButton onPress={onPress} label="Power off" iconName="poweroff" />);
    fireEvent.press(screen.getByText('Power off'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
