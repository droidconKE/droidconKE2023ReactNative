import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import CallForSpeakersCard from '../../../components/cards/CallForSpeakersCard';
import OrganizersCard from '../../../components/cards/OrganizersCard';
import SponsorsCard from '../../../components/cards/SponsorsCard';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import SessionsList from '../../../components/lists/SessionsList';
import SpeakersList from '../../../components/lists/SpeakersList';
import GoogleSignInModal from '../../../components/modals/GoogleSignInModal';
import VideoPlayer from '../../../components/player/VideoPlayer';
import { useAuth } from '../../../context/auth';

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

          <Image source={require('../../../assets/images/banner.png')} style={styles.image} contentFit="contain" />

          <Space size={16} />

          <CallForSpeakersCard />

          <Space size={20} />

          <SponsorsCard />

          <Space size={16} />
        </View>
      )}

      {user && (
        <View style={styles.main}>
          <Space size={10} />

          <VideoPlayer />

          <Space size={30} />

          <SessionsList />

          <Space size={30} />

          <SpeakersList />

          <Space size={6} />

          <SponsorsCard />

          <Space size={16} />

          <OrganizersCard />

          <Space size={16} />

          <Pressable onPress={() => signOut()}>
            <StyledText style={{ color: colors.tertiary }}>Sign Out</StyledText>
          </Pressable>
        </View>
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
    width: '100%',
    alignItems: 'center',
  },
  section: {
    flex: 1,
  },
  image: {
    height: 175,
    width: '100%',
  },
});
