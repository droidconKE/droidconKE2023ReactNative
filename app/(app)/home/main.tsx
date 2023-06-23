/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from '@react-navigation/native';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Dimensions, Image, Pressable, StyleSheet, View } from 'react-native';
import CallForSpeakersCard from '../../../components/cards/CallForSpeakersCard';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import GoogleSignInModal from '../../../components/modals/GoogleSignInModal';
import { useAuth } from '../../../context/auth';

// TODO: Home page
/**
 * - Implement a home page that displays all the components listed below:
 * - Should display VideoPlayer component, Sessions list component, Speakers list component, Sponsors card, Organizers card.
 * - Check out components folder for the starter code for all those components
 * - For Videoplayer component, use https://droidcon.co.ke/video/DroidconKe_2019_Highlight_Reel_HD.mp4 as the video link
 * - For Sessions list component, use mock/sessions.ts data
 * - For Speakers list component, use mock/speakers.ts data
 * - For Sponsors card, use mock/sponsors.ts data
 * - For Organizers card, use mock/organizers.ts data
 * - use the components you’ve implemented in the previous tasks
 *
 */

const { width } = Dimensions.get('window');

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
        <View>
          <StyledText font="semiBold" size="md">
            Welcome to the largest Focussed Android Developer community in Africa
          </StyledText>

          <Space size={16} />

          <Image source={require('../../../assets/images/banner.png')} style={styles.image} resizeMode="contain" />

          <Space size={16} />

          <CallForSpeakersCard />

          <Space size={16} />
        </View>
      )}

      <Link href="/speakers">
        <StyledText>Go to speakers page</StyledText>
      </Link>

      <Space size={16} />

      {user && (
        <Pressable onPress={() => signOut()}>
          <StyledText style={{ color: colors.tertiary }}>Sign Out</StyledText>
        </Pressable>
      )}

      <View>
        <GoogleSignInModal visible={signInModalVisible} onClose={() => setSignInModalVisible(false)} />
      </View>
    </MainContainer>
  );
};

export default Main;

const styles = StyleSheet.create({
  image: {
    height: 175,
    width: width - 32,
  },
});
