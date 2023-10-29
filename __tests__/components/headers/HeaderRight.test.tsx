import { render, screen } from '@testing-library/react-native';
import HeaderRight from '../../../components/headers/HeaderRight';

jest.mock('expo-router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

describe('<HeaderRight/>', () => {
  it('renders HeaderRight component', () => {
    render(<HeaderRight />);
    expect(screen.getByTestId('headerRight')).toBeDefined();
    expect(screen.getByText('Feedback')).toBeDefined();
  });
});
