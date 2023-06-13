import { render, screen } from '@testing-library/react-native';
import MainHeader from '../../../components/headers/MainHeader';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    dark: true,
  }),
}));

describe('<MainHeader/>', () => {
  it('renders MainHeader component', () => {
    render(<MainHeader />);
    expect(screen.getByTestId('mainHeader')).toBeDefined();
  });
});
