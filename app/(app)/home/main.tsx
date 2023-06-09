import { Link } from 'expo-router';
import React from 'react';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

/**
 * Should display VideoPlayer component, Sessions list component, Speakers list component, Sponsors card, Organizers card
 * - implement a home page that displays all the components listed above
 * - use the components you’ve implemented in the previous tasks
 * - use dummy data for now
 */

// TODO: Home page

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
