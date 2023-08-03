import { Image } from 'expo-image';
import { Stack, useRouter } from 'expo-router';
import React, { useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import OrganizerCard from '../../../components/cards/OrganizerCard';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import HeaderRight from '../../../components/headers/HeaderRight';
import GoogleSignInModal from '../../../components/modals/GoogleSignInModal';
import { WIDE_BLURHASH } from '../../../config/constants';
import type { OrganizingTeamMember } from '../../../global';
import { OrganizingTeam } from '../../../mock/organizingTeam';

const { width } = Dimensions.get('window');

const About = () => {
  const router = useRouter();

  const [signInModalVisible, setSignInModalVisible] = useState<boolean>(false);

  const showSignInModal = () => {
    setSignInModalVisible(true);
  };
  const OrganizingIndividuals = OrganizingTeam.data.filter((item) => item.type === 'individual');
  return (
    <MainContainer preset="scroll">
      <Stack.Screen
        options={{
          headerRight: () => <HeaderRight handlePress={showSignInModal} />,
        }}
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source="https://res.cloudinary.com/khariokitony/image/upload/v1690514752/Droidcon-organizers.png"
          placeholder={WIDE_BLURHASH}
          contentFit="contain"
        />

        <View style={styles.content}>
          <StyledText font="bold" size="xl" variant="primary">
            About
          </StyledText>

          <Space size={16} />

          <StyledText font="regular" size="md">
            Droidcon is a global conference focused on the engineering of Android applications. Droidcon provides a
            forum for developers to network with other developers, share techniques, announce apps and products, and to
            learn and teach.
          </StyledText>

          <Space size={8} />

          <StyledText font="regular" size="md">
            This two-day developer focused gathering will be held in Nairobi Kenya on November 8th to 10th 2023 and will
            be the largest of its kind in Africa.
          </StyledText>

          <Space size={8} />

          <StyledText font="regular" size="md">
            It will have workshops and codelabs focused on the building of Android applications and will give
            participants an excellent chance to learn about the local Android development ecosystem, opportunities and
            services as well as meet the engineers and companies who work on them.
          </StyledText>

          <Space size={30} />

          <StyledText font="bold" size="xl" variant="primary">
            Organizing Team
          </StyledText>

          <Space size={20} />

          <FlatList
            data={OrganizingIndividuals}
            numColumns={3}
            renderItem={({ item }: ListRenderItemInfo<OrganizingTeamMember>) => (
              <OrganizerCard
                name={item.name}
                photo={item.photo}
                tagline={item.tagline}
                handlePress={() => router.push({ pathname: `/${item.name}`, params: { name: item.name } })}
              />
            )}
            keyExtractor={(item: OrganizingTeamMember, index: number) => index.toString()}
            scrollEnabled={false}
          />

          {/**
           * TODO: Add an organizers card
           */}
        </View>
      </View>

      <View>
        <GoogleSignInModal visible={signInModalVisible} onClose={() => setSignInModalVisible(false)} />
      </View>
    </MainContainer>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
  },
  image: {
    width: width,
    height: 225,
  },
  content: {
    padding: 16,
  },
});
