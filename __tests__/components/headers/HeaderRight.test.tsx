import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import HeaderRight from '../../../components/headers/HeaderRight';

jest.mock('@expo/vector-icons', () => ({
  Ionicons: 'Ionicons',
}));

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({ colors: {} }),
}));

jest.mock('../../../context/auth', () => ({
  useAuth: jest.fn(() => ({ user: null })),
}));

jest.mock('expo-router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('<HeaderRight/>', () => {
  it('renders sign-in button when user is not logged in', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(<HeaderRight handlePress={handlePress} />);
    const headerRightButton = getByTestId('headerRight');
    expect(headerRightButton).toBeTruthy();
    fireEvent.press(headerRightButton);
    expect(handlePress).toHaveBeenCalled();
  });
});
