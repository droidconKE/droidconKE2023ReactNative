import { render, screen } from '@testing-library/react-native';
import Avatar from '../../../components/buttons/Avatar';

// Mock useTheme hook.
jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      primary: 'red',
      background: 'white',
    },
  }),
}));

// Test that avatar component is rendered.
describe('<Avatar/>', () => {
  it('renders', () => {
    render(<Avatar />);
    expect(screen.getByTestId('avatar')).toBeTruthy();
  });

  // Test that border color changes when bordered boolean value changes.
  it('renders expected border color', () => {
    render(<Avatar bordered />);
    expect(screen.getByTestId('avatar')).toHaveStyle({
      borderColor: 'red',
    });
  });
});
