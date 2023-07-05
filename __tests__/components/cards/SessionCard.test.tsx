import { fireEvent, render, screen } from '@testing-library/react-native';

import SessionCard from '../../../components/cards/SessionCard';
import type { Session } from '../../../global';
import { Sessions } from '../../../mock/sessions';

describe('<SessionCard/>', () => {
  const onPress = jest.fn();

  it('renders SessionCard component', () => {
    render(<SessionCard handlePress={onPress} item={Sessions.data[0] as Session} />);
    expect(screen.getByTestId('session-card')).toBeDefined();
  });

  it('renders session details', () => {
    const { getByText } = render(<SessionCard handlePress={onPress} item={Sessions.data[0] as Session} />);
    expect(getByText('The Apache Way: Doing Community like Apache')).toBeDefined();
  });

  it('fires onPress function when pressed', () => {
    render(<SessionCard handlePress={onPress} item={Sessions.data[0] as Session} />);
    fireEvent.press(screen.getByText('The Apache Way: Doing Community like Apache'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
