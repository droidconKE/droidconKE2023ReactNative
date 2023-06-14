import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import IconButton from '../../../components/buttons/IconButton';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      primary: 'red',
      text: 'blue',
    },
  }),
}));

describe('<IconButton/>', () => {
  const onPress = jest.fn();

  it('renders iconButton component', () => {
    render(<IconButton isActive onPress={() => console.log('Powered off')} name="power-off" />);
    expect(screen.getByTestId('iconButton')).toBeTruthy();
  });

  it('calls the function provided by onPress prop after pressing the button', () => {
    render(<IconButton isActive onPress={onPress} name="power-off" />);
    fireEvent.press(screen.getByTestId('iconButton'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it(`changes color based on props`, () => {
    render(<IconButton isActive onPress={onPress} name="power-off" />);
    expect(screen.getByTestId('icon')).toHaveStyle({
      color: 'red',
    });
  });
});
