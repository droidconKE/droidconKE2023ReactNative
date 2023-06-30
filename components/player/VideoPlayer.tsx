/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from '@react-navigation/native';
import { ResizeMode, Video } from 'expo-av';
import { Image } from 'expo-image';
import React, { useRef } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { VIDEO_URL } from '../../config/constants';

const { width } = Dimensions.get('window');

const VideoPlayer = () => {
  const { colors } = useTheme();

  const video = useRef(null);

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]} testID="video-player">
      <Video
        testID="video-component"
        ref={video}
        style={styles.video}
        source={{
          uri: VIDEO_URL,
        }}
        useNativeControls
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted={false}
        volume={0.3}
        shouldPlay
        usePoster
        PosterComponent={() => (
          <Image
            source={require('../../assets/images/banner.png')}
            style={styles.image}
            contentFit="none"
            contentPosition="center"
          />
        )}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderRadius: 12,
    width: width - 32,
  },
  video: {
    alignSelf: 'center',
    width: '100%',
    height: 180,
    borderRadius: 12,
  },
  image: {
    height: 180,
    width: '100%',
    borderRadius: 12,
  },
});
