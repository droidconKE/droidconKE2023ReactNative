import { render, screen } from '@testing-library/react-native';
import HeaderRight from '../../../components/headers/HeaderRight';

jest.mock('expo-router', () => ({
  __esModule: true,
  useRouter: jest.fn(),
}));

// To be uncommented when auth flow development resumes
/*
describe('<HeaderRightWithAuth/>', () => {
  it('renders sign-in button when user is not logged in', () => {
    const handlePress = jest.fn();
    const { getByTestId } = render(<HeaderRightWithAuth handlePress={handlePress} />);
    const headerRightButton = getByTestId('headerRightWithUser');
    expect(headerRightButton).toBeTruthy();
    fireEvent.press(headerRightButton);
    expect(handlePress).toHaveBeenCalled();
  });
});
*/

describe('<HeaderRight/>', () => {
  it('renders HeaderRight component', () => {
    render(<HeaderRight />);
    expect(screen.getByTestId('headerRight')).toBeDefined();
    expect(screen.getByTestId('avatar')).toBeDefined();
    expect(screen.getByText('Feedback')).toBeDefined();
  });
});
