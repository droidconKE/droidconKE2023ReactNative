/**
 * -  should display an image, description and a grid view of organizing team, and an organizers card
 * -  consider reusing the image component that was used in the speakers list
 * -  clicking on the team member image should navigate to the [speaker] page
 */

// TODO: About page - implement about event page

import React from 'react';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';

const about = () => {
  return (
    <MainContainer preset="scroll">
      <StyledText>about</StyledText>
    </MainContainer>
  );
};

export default about;
