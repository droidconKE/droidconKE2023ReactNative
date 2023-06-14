import { render, screen } from '@testing-library/react-native';
import HeaderRight from '../../../components/headers/HeaderRight';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('<HeaderRight/>', () => {
  it('renders HeaderRight component', () => {
    render(<HeaderRight />);
    expect(screen.getByTestId('headerRight')).toBeTruthy();
  });
});
