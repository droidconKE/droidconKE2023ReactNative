import { Link } from 'expo-router';
import React from 'react';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

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

const main = () => {
  return (
    <MainContainer preset="scroll">
      <StyledText title>Welcome to the DroidCon2023!</StyledText>

      <Link href="/speakers">
        <StyledText>speakers</StyledText>
      </Link>
    </MainContainer>
  );
};

export default main;
