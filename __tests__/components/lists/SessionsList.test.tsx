import SessionsList from '../../../components/lists/SessionsList';
import { Sessions } from '../../../mock/sessions';
import { render } from '../../../util/test-utils';

jest.mock('expo-router');

describe('SessionsList', () => {
  it('renders the sessions list correctly', () => {
    const { getByText } = render(<SessionsList sessions={Sessions} />);

    expect(getByText('Sessions')).toBeDefined();

    const sessionCount = (Sessions.meta.paginator.count - 5).toString();

    expect(getByText(`+${sessionCount}`)).toBeDefined();
  });
});
