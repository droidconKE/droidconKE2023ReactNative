import { render, screen } from '@testing-library/react-native';
import MainHeader from '../../../components/headers/MainHeader';

// Mock useTheme hook.
jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    dark: true,
  }),
}));

describe('<MainHeader/>', () => {
  // Test it renders
  it('renders', () => {
    render(<MainHeader />);
    expect(screen.getByTestId('mainHeader')).toBeDefined();
  });
});
