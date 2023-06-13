import { fireEvent, render, screen } from '@testing-library/react-native';
import SocialShareButton from '../../../components/buttons/SocialShareButton';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      background: 'red',
    },
  }),
}));

describe('<SocialShareButton/>', () => {
  const onPress = jest.fn();

  it('renders', () => {
    render(<SocialShareButton handlePress={onPress} title="share" iconName="share" />);
    expect(screen.getByText('share')).toBeDefined();
  });

  it('shows title share', () => {
    render(<SocialShareButton handlePress={onPress} title="share" iconName="share" />);
    expect(screen.getByTestId('socialShareButtonText')).toHaveTextContent('share');
  });

  it('Triggers HandlePress button ', () => {
    render(<SocialShareButton handlePress={onPress} title="share" iconName="share" />);
    fireEvent.press(screen.getByText('share'));
    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
