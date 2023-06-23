/* eslint-disable react/no-unstable-nested-components */
import { Stack } from 'expo-router';
import React, { useState } from 'react';
import { View } from 'react-native';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import GoogleSignInModal from '../../../components/modals/GoogleSignInModal';

// TODO: About page - implement about event page
/**
 * -  should display an image, description and a grid view of organizing team, and an organizers card
 * -  consider reusing the image component that was used in the speakers list
 * -  clicking on the team member image should navigate to the [speaker] page
 */

// TODO: Use data from mock/organizers.ts

const About = () => {
  const [signInModalVisible, setSignInModalVisible] = useState<boolean>(false);

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
      <StyledText>about</StyledText>
      <View>
        <GoogleSignInModal visible={signInModalVisible} onClose={() => setSignInModalVisible(false)} />
      </View>
    </MainContainer>
  );
};

export default About;
