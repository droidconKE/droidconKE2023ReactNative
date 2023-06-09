import { fireEvent, render, screen } from '@testing-library/react-native';
import SocialShareButton from '../../../components/buttons/SocialShareButton';

// Mock useThene hook.
jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      background: 'red',
    },
  }),
}));

describe('<SocialShareButton/>', () => {
  const onPress = jest.fn();

  // Test it renders
  it('renders', () => {
    render(<SocialShareButton handlePress={onPress} title="share" iconName="share" />);
    expect(screen.getByText('share')).toBeDefined();
  });

  // Test title
  it('shows title share', () => {
    render(<SocialShareButton handlePress={onPress} title="share" iconName="share" />);
    expect(screen.getByTestId('socialShareButtonText')).toHaveTextContent('share');
  });

  // Test handlePress
  it('HandlePress button triggers', () => {
    render(<SocialShareButton handlePress={onPress} title="share" iconName="share" />);
    fireEvent.press(screen.getByText('share'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
