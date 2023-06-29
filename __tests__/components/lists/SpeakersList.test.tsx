import { render } from '@testing-library/react-native';
import SpeakersList from '../../../components/lists/SpeakersList';
import { Speakers } from '../../../mock/speakers';

jest.mock('expo-router');

describe('SpeakersList', () => {
  it('renders the SpeakersList correctly', () => {
    const { getByText } = render(<SpeakersList />);

    expect(getByText('Speakers')).toBeDefined();

    const speakersCount = (Speakers.data.length - 5).toString();

    expect(getByText(`+${speakersCount}`)).toBeDefined();
  });
});
