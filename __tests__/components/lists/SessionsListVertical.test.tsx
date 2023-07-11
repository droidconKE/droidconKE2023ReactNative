// Test it renders card when you pass variant card
// Test it renders list component when you pass variant list
// Test handleBookMark function

import { render, screen } from '@testing-library/react-native';
import SessionsListVertical from '../../../components/lists/SessionsListVertical';
import type { SessionForSchedule } from '../../../global';
import { Schedule } from '../../../mock/schedule';

jest.mock('expo-router');

describe('SessionsListVertical', () => {
  it('renders SessionsListVertical component', () => {
    render(<SessionsListVertical sessions={Schedule.data['2022-11-16'] as unknown as Array<SessionForSchedule>} />);
    expect(screen.getByTestId('sessions-list-vertical')).toBeDefined();
  });
  it('Renders card component when you pass prop variant card', () => {
    render(
      <SessionsListVertical
        variant="card"
        sessions={Schedule.data['2022-11-16'] as unknown as Array<SessionForSchedule>}
      />,
    );
    screen.debug();
    expect(screen.getByTestId('session-card-sessions')).toBeDefined();
  });
});
