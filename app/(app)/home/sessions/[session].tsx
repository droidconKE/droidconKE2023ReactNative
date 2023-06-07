import { Stack, useSearchParams } from 'expo-router';
import React from 'react';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';

/**
 * TODO: Session page
 * - should render a Days component at the top
 * - on the left render clickable text components each displaying a day
 * - on the right a switch component as shown in the design
 * - clicking on the header icons should set the list state to either collapsed or not
 * - clicking on the filter button on the header should open a modal component
 */

const Session = () => {
  const { id } = useSearchParams();
  return (
    <MainContainer>
      <Stack.Screen
        options={{
          title: `Session ${id}`,
          headerTitleAlign: 'center',
        }}
      />
      <StyledText>session id: {id}</StyledText>
    </MainContainer>
  );
};

export default Session;
