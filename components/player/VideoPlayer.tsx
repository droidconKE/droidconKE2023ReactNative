/* eslint-disable react/no-unstable-nested-components */
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import type { VideoProps } from 'expo-av';
import { ResizeMode, Video } from 'expo-av';
import { Image } from 'expo-image';
import React, { useRef, useState } from 'react';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { VIDEO_URL } from '../../config/constants';

const { width } = Dimensions.get('window');

type VideoPlayerRef = Video | null;

const VideoPlayer = () => {
  const [status, setStatus] = useState({} as VideoProps['status']);

  const { colors } = useTheme();

  const video = useRef<VideoPlayerRef>(null);

  return (
    <View style={[styles.container, { backgroundColor: colors.card }]} testID="video-player">
      <Video
        testID="video-component"
        ref={video}
        style={styles.video}
        source={{
          uri: VIDEO_URL,
        }}
        useNativeControls={false}
        resizeMode={ResizeMode.COVER}
        isLooping
        isMuted
        volume={0.3}
        shouldPlay
        onPlaybackStatusUpdate={(_status) => setStatus(() => _status)}
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
      {video.current && (
        <View style={styles.button}>
          <Pressable
            onPress={() => {
              status?.isMuted ? video.current?.setIsMutedAsync(false) : video.current?.setIsMutedAsync(true);
            }}
          >
            <Ionicons name={status?.isMuted ? 'volume-mute-sharp' : 'volume-medium-sharp'} size={30} color="white" />
          </Pressable>
        </View>
      )}
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
  button: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
