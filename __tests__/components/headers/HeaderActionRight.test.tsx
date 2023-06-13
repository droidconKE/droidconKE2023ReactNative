import { render, screen } from '@testing-library/react-native';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('<HeaderActionRight/>', () => {
  it('renders HeaderActionRight component.', () => {
    render(<HeaderActionRight />);
    expect(screen.getByTestId('headerActionRight')).toBeTruthy();
  });
});
