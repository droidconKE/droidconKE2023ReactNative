import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import ClearButton from '../../../components/buttons/ClearButton';

describe('<ClearButton/>', () => {
  // Test that <ClearButton/> component is rendered
  it('renders clearbutton component', () => {
    render(<ClearButton onPress={() => console.log('Powered off')} label="Power off" iconName="poweroff" />);
    expect(screen.getByTestId('clearButton')).toBeTruthy();
  });

  // Test that the label press is shown.
  it('renders label poweref off', () => {
    render(<ClearButton onPress={() => console.log('Powered off')} label="Power off" iconName="poweroff" />);
    expect(screen.getByText('Power off')).toBeDefined();
  });

  // Test that onPress function works
  it('calls the function provided by onPress prop after pressing the button', () => {
    const onPress = jest.fn();
    render(<ClearButton onPress={onPress} label="Power off" iconName="poweroff" />);
    fireEvent.press(screen.getByText('Power off'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
