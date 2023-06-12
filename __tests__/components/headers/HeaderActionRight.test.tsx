// Test it renders

import { render, screen } from '@testing-library/react-native';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';

// Mock useRouter hook.
jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('<HeaderActionRight/>', () => {
  it('renders correctly', () => {
    render(<HeaderActionRight />);
    expect(screen.getByTestId('headerActionRight')).toBeTruthy();
  });
});
