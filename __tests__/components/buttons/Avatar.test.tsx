import { render, screen } from '@testing-library/react-native';
import React from 'react';
import Avatar from '../../../components/buttons/Avatar';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      primary: 'red',
      background: 'white',
    },
  }),
}));

describe('<Avatar/>', () => {
  it('renders avatar component', () => {
    render(<Avatar />);
    expect(screen.getByTestId('avatar')).toBeTruthy();
  });

  it('renders expected border color when bordered boolean value changes', () => {
    render(<Avatar bordered />);
    expect(screen.getByTestId('avatar')).toHaveStyle({
      borderColor: 'red',
    });
  });
});
