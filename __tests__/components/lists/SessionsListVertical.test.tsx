import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react-native';
import SessionsListVertical from '../../../components/lists/SessionsListVertical';
import { Schedule } from '../../../mock/schedule';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

jest.mock('expo-router');

describe('SessionsListVertical', () => {
  it('renders SessionsListVertical component', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SessionsListVertical sessions={Schedule.data['2022-11-16']} bookmarked={false} />;
      </QueryClientProvider>,
    );
    expect(screen.getByTestId('sessions-list-vertical')).toBeDefined();
  });
  it('Renders card component when you pass prop variant card', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SessionsListVertical variant="card" sessions={Schedule.data['2022-11-16']} bookmarked={false} />
      </QueryClientProvider>,
    );
    expect(screen.getAllByTestId('card-sessions')).toBeDefined();
  });

  it('Renders list item component when you pass prop variant list', () => {
    render(
      <QueryClientProvider client={queryClient}>
        <SessionsListVertical variant="list" sessions={Schedule.data['2022-11-16']} bookmarked={false} />
      </QueryClientProvider>,
    );
    expect(screen.getAllByTestId('card-list')).toBeDefined();
  });

  it('Shows bookmarked content when prop bookmark is true', () => {
    const { getAllByText } = render(
      <QueryClientProvider client={queryClient}>
        <SessionsListVertical variant="list" sessions={Schedule.data['2022-11-16']} bookmarked={true} />,
      </QueryClientProvider>,
    );
    expect(getAllByText('A guide to Abstract writing - Hannah Olukuye')).toBeDefined();
  });
});
