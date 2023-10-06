import { render } from '@testing-library/react-native';
import React from 'react';
import FeedList from '../../../components/lists/FeedList';
import { Feed as FeedData } from '../../../mock/feed';

jest.mock('expo-router');

describe('FeedList', () => {
  it('renders the feed list correctly', () => {
    const { getAllByTestId } = render(<FeedList />);

    // Ensure that all feed items are rendered
    const feedItems = getAllByTestId('feedItem');
    expect(feedItems.length).toBe(FeedData.data.length);
  });

  it('renders the feed item with the correct data', () => {
    const { getByText } = render(<FeedList />);

    // Check if each feed item is rendered with the correct data
    FeedData.data.forEach((feed) => {
      const feedItem = getByText(feed.body);
      expect(feedItem).toBeTruthy();
    });
  });
});
