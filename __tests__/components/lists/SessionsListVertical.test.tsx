import { render, screen } from '@testing-library/react-native';
import SessionsListVertical from '../../../components/lists/SessionsListVertical';
import { Schedule } from '../../../mock/schedule';

jest.mock('expo-router');

describe('SessionsListVertical', () => {
  it('renders SessionsListVertical component', () => {
    render(<SessionsListVertical sessions={Schedule.data['2022-11-16']} bookmarked={false} />);
    expect(screen.getByTestId('sessions-list-vertical')).toBeDefined();
  });
  it('Renders card component when you pass prop variant card', () => {
    render(<SessionsListVertical variant="card" sessions={Schedule.data['2022-11-16']} bookmarked={false} />);
    expect(screen.getAllByTestId('card-sessions')).toBeDefined();
  });

  it('Renders list item component when you pass prop variant list', () => {
    render(<SessionsListVertical variant="list" sessions={Schedule.data['2022-11-16']} bookmarked={false} />);
    expect(screen.getAllByTestId('card-list')).toBeDefined();
  });

  it('Shows bookmarked content when prop bookmark is true', () => {
    const { getAllByText } = render(
      <SessionsListVertical variant="list" sessions={Schedule.data['2022-11-16']} bookmarked={true} />,
    );
    expect(getAllByText('A guide to Abstract writing - Hannah Olukuye')).toBeDefined();
  });
});
