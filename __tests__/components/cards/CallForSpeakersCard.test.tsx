import { render } from '@testing-library/react-native';
import React from 'react';

import CallForSpeakersCard from '../../../components/cards/CallForSpeakersCard';

jest.mock('@expo/vector-icons', () => ({
  AntDesign: 'AntDesign',
}));

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({ colors: { tint: '#00E2C3' } }),
}));

jest.mock('../../../assets/artworks/Vector', () => 'Vector');

describe('<CallForSpeakersCard />', () => {
  it('renders CallForSpeakersCard component', () => {
    const { getByText, getByTestId } = render(<CallForSpeakersCard />);

    const title = getByText('Call for Speakers');
    const smallText = getByText('Apply to be a speaker');
    const vector = getByTestId('vector');
    const caretrightIcon = getByTestId('caretrightIcon');

    expect(title).toBeTruthy();
    expect(smallText).toBeTruthy();
    expect(vector).toBeTruthy();
    expect(caretrightIcon).toBeTruthy();
  });
});
