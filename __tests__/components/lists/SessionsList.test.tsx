import { render } from '@testing-library/react-native';
import SessionsList from '../../../components/lists/SessionsList';
import { Sessions } from '../../../mock/sessions';

jest.mock('expo-router');

describe('SessionsList', () => {
  it('renders the sessions list correctly', () => {
    const { getByText } = render(<SessionsList />);

    expect(getByText('Sessions')).toBeDefined();

    const sessionCount = (Sessions.data.length - 5).toString();

    expect(getByText(`+${sessionCount}`)).toBeDefined();
  });
});
