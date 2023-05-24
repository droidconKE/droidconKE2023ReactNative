import { Link } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import StyledText from '../../../../components/common/StyledText';
import MainContainer from '../../../../components/container/MainContainer';

export default function Page() {
  return (
    <MainContainer>
      <View>
        <StyledText>Sheet</StyledText>
        <Link href="/home/feed/share">
          <StyledText>Open Share bottomsheet</StyledText>
        </Link>
      </View>
    </MainContainer>
  );
}
