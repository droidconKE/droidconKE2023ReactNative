import { render } from '@testing-library/react-native';
import SpeakersList from '../../../components/lists/SpeakersList';
import { Speakers } from '../../../mock/speakers';

jest.mock('expo-router');

describe('SpeakersList', () => {
  it('renders the SpeakersList correctly', () => {
    const { getByText } = render(<SpeakersList speakers={Speakers} />);

    expect(getByText('Speakers')).toBeDefined();

    const speakersCount = (Speakers.meta.paginator.count - 5).toString();

    expect(getByText(`+${speakersCount}`)).toBeDefined();
  });
});
