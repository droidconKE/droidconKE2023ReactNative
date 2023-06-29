import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import FeedList from '../../../components/lists/FeedList';
import { Feed as FeedData } from '../../../mock/feed';

jest.mock('expo-router', () => ({
  Link: ({ children }: any) => children, // Mock Link component to render its children directly
}));

describe('FeedList', () => {
  it('renders the feed list correctly', () => {
    const { getAllByTestId } = render(
      <NavigationContainer>
        <FeedList />
      </NavigationContainer>,
    );

    // Ensure that all feed items are rendered
    const feedItems = getAllByTestId('feedItem');
    expect(feedItems.length).toBe(FeedData.data.length);
  });

  it('renders the feed item with the correct data', () => {
    const { getByText } = render(
      <NavigationContainer>
        <FeedList />
      </NavigationContainer>,
    );

    // Check if each feed item is rendered with the correct data
    FeedData.data.forEach((feed) => {
      const feedItem = getByText(feed.body);
      expect(feedItem).toBeTruthy();
    });
  });
});
