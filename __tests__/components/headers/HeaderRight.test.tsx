import { render, screen } from '@testing-library/react-native';
import HeaderRight from '../../../components/headers/HeaderRight';

// Mock useRouter hook.
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('<HeaderRight/>', () => {
  it('renders correctly', () => {
    render(<HeaderRight />);
    expect(screen.getByTestId('headerRight')).toBeTruthy();
  });
});
