import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render } from '@testing-library/react-native';
import SessionsList from '../../../components/lists/SessionsList';
import { Sessions } from '../../../mock/sessions';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

jest.mock('expo-router');

describe('SessionsList', () => {
  it('renders the sessions list correctly', () => {
    const { getByText } = render(
      <QueryClientProvider client={queryClient}>
        <SessionsList sessions={Sessions} />
      </QueryClientProvider>,
    );

    expect(getByText('Sessions')).toBeDefined();

    const sessionCount = (Sessions.meta.paginator.count - 5).toString();

    expect(getByText(`+${sessionCount}`)).toBeDefined();
  });
});
