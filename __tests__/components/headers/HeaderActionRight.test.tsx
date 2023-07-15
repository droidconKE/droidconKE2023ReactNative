import { render, screen } from '@testing-library/react-native';
import HeaderActionRight from '../../../components/headers/HeaderActionRight';

jest.mock('expo-router', () => ({
  useRouter: jest.fn(),
}));

describe('<HeaderActionRight/>', () => {
  it('renders HeaderActionRight component.', () => {
    render(
      <HeaderActionRight
        collapsed
        onCollapse={() => console.log('collapsed')}
        handlePress={() => console.log('open filter modal')}
      />,
    );
    expect(screen.getByTestId('headerActionRight')).toBeTruthy();
  });
});
