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
    const { getByTestId } = render(<IconButton isActive={false} onPress={onPress} name="power-off" />);
    const button = getByTestId('iconButton');
    fireEvent.press(button);
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
