import { fireEvent, render, screen } from '@testing-library/react-native';

import SessionCard from '../../../components/cards/SessionCard';
import type { Session } from '../../../global';
import { Sessions } from '../../../mock/sessions';

const schedule = {
  id: 122,
  title: 'Registration & Check-In',
  description: 'Registration & Check-In',
  slug: '',
  session_format: '',
  session_level: '',
  session_image: null,
  backgroundColor: '#89609E',
  borderColor: '#89609E',
  is_serviceSession: true,
  is_keynote: false,
  is_bookmarked: true,
  start_date_time: '2022-11-16 08:30:00',
  start_time: '08:30:00',
  end_date_time: '2022-11-16 10:00:00',
  end_time: '10:00:00',
  speakers: [],
  rooms: [
    {
      title: 'Mekatilili',
      id: 1,
    },
  ],
};

describe('<SessionCard/>', () => {
  const onPress = jest.fn();

  it('renders SessionCard component', () => {
    render(<SessionCard handlePress={onPress} item={Sessions.data[0] as Session} />);
    expect(screen.getByTestId('card')).toBeDefined();
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

  it('renders SessionCardOnSessions when you pass sessions to screen prop', () => {
    render(<SessionCard screen="sessions" handlePress={onPress} item={schedule} />);
    expect(screen.getByTestId('card-sessions')).toBeDefined();
  });

  it('renders SessionCardList when you pass sessions and list to screen prop', () => {
    render(<SessionCard variant="list" screen="sessions" handlePress={onPress} item={schedule} />);
    expect(screen.getByTestId('card-list')).toBeDefined();
  });
});
