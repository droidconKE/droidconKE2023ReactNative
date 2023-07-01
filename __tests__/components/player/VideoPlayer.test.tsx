import { render } from '@testing-library/react-native';
import React from 'react';
import VideoPlayer from '../../../components/player/VideoPlayer';

describe('VideoPlayer', () => {
  test('renders video player component', () => {
    const { getByTestId } = render(<VideoPlayer />);
    const videoPlayer = getByTestId('video-player');
    expect(videoPlayer).toBeTruthy();
  });

  test('renders video component', () => {
    const { getByTestId } = render(<VideoPlayer />);
    const videoComponent = getByTestId('video-component');
    expect(videoComponent).toBeTruthy();
  });
});
