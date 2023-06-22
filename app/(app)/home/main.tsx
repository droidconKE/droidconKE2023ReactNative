/* eslint-disable react/no-unstable-nested-components */
import { useTheme } from '@react-navigation/native';
import { Link, Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, View } from 'react-native';
import ViewAllButton from '../../../components/buttons/ViewAllButton';
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

      <StyledText>Welcome to the DroidCon2023!</StyledText>

      <Space size={16} />

      <ViewAllButton label="80" onPress={() => console.log('pressed')} />

      <Space size={16} />

      <Link href="/speakers">
        <StyledText>speakers</StyledText>
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
