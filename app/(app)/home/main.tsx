/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from '@react-navigation/native';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import CallForSpeakersCard from '../../../components/cards/CallForSpeakersCard';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import SessionsList from '../../../components/lists/SessionsList';
import SpeakersList from '../../../components/lists/SpeakersList';
import GoogleSignInModal from '../../../components/modals/GoogleSignInModal';
import { useAuth } from '../../../context/auth';

// TODO: Home page
/**
 * - Implement a home page that displays all the components listed below:
 * - Should display VideoPlayer component, Sessions list component, Speakers list component, Sponsors card, Organizers card.
 * - Check out components folder for the starter code for all those components
 * - For Videoplayer component, use https://droidcon.co.ke/video/DroidconKe_2019_Highlight_Reel_HD.mp4 as the video link
 * - For Sponsors card, use mock/sponsors.ts data
 * - For Organizers card, use mock/organizers.ts data
 * - use the components you’ve implemented in the previous tasks
 *
 */

const Main = () => {
  const [signInModalVisible, setSignInModalVisible] = useState<boolean>(false);

  const { user, signOut } = useAuth();

  const { colors } = useTheme();

  const showSignInModal = () => {
    setSignInModalVisible(true);
  };

  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight handlePress={showSignInModal} />,
        }}
      />

      <Space size={16} />

      {!user && (
        <View style={styles.main}>
          <StyledText font="semiBold" size="md">
            Welcome to the largest Focussed Android Developer community in Africa
          </StyledText>

          <Space size={16} />

          <View style={styles.section}>
            <Image source={require('../../../assets/images/banner.png')} style={styles.image} resizeMode="contain" />
          </View>

          <Space size={16} />

          <View style={styles.section}>
            <CallForSpeakersCard />
          </View>

          <Space size={16} />
        </View>
      )}

      {user && (
        <>
          <Space size={16} />

          <SessionsList />

          <Space size={30} />

          <SpeakersList />

          <Space size={16} />

          <Pressable onPress={() => signOut()}>
            <StyledText style={{ color: colors.tertiary }}>Sign Out</StyledText>
          </Pressable>
        </>
      )}

      <View>
        <GoogleSignInModal visible={signInModalVisible} onClose={() => setSignInModalVisible(false)} />
      </View>
    </MainContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: 10,
  },
  section: {
    flex: 1,
  },
  image: {
    height: 175,
    width: '100%',
  },
});
