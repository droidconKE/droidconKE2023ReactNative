import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import * as Linking from 'expo-linking';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import Row from '../../components/common/Row';
import Space from '../../components/common/Space';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';
import { usePrefetchedEventData } from '../../services/api';
import { getTwitterHandle } from '../../util/helpers';

type Profile = {
  image?: string;
  bio?: string;
  twitter_handle?: string | null;
  tagline?: string;
  name?: string;
};

const { height } = Dimensions.get('window');

const Speaker = () => {
  const { colors, dark } = useTheme();
  const router = useRouter();
  const { name, type } = useLocalSearchParams();
  const [details, setDetails] = useState<Profile>({});

  const { speakers, organizingTeam } = usePrefetchedEventData();

  useEffect(() => {
    if (type === 'speaker') {
      const speaker = speakers?.data.filter((x) => x.name === name)[0];
      setDetails({
        image: speaker?.avatar,
        bio: speaker?.biography,
        twitter_handle: speaker?.twitter,
        tagline: speaker?.tagline,
        name: speaker?.name,
      });
    } else if (type === 'organizer') {
      const organizer = organizingTeam?.data.filter((x) => x.name === name)[0];
      setDetails({
        image: organizer?.photo,
        bio: organizer?.bio,
        twitter_handle: organizer?.twitter_handle,
        tagline: organizer?.tagline,
        name: organizer?.name,
      });
    }
  }, [name, organizingTeam?.data, speakers?.data, type]);

  const handleTwitterProfile = (link: string | null | undefined) => {
    if (link) {
      Linking.openURL(`${link}`);
    }
  };

  return (
    <MainContainer preset="fixed">
      <Stack.Screen
        options={{
          title: type === 'speaker' ? 'Speaker' : 'Organizer',
          headerTitleAlign: 'left',
          headerLeft: () => (
            <AntDesign name="arrowleft" size={24} color={colors.whiteConstant} onPress={() => router.back()} />
          ),
        }}
      />
      <ScrollView style={styles.main}>
        <ImageBackground
          source={
            dark ? require('../../assets/images/speaker-dark.png') : require('../../assets/images/speaker-light.png')
          }
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.centered}>
          <View style={styles.avatar}>
            <Image
              source={details?.image}
              style={[styles.image, { borderColor: colors.tint }]}
              contentFit="contain"
              transition={1000}
            />
          </View>
          <View style={styles.info}>
            <View style={styles.row}>
              {type === 'speaker' && <FontAwesome5 name="android" size={18} color={colors.tertiary} />}
              <StyledText size="sm" font="regular" style={{ color: colors.tertiary }}>
                {type === 'speaker' ? 'Speaker' : 'Organizer'}
              </StyledText>
            </View>
            <StyledText size="lg" font="bold" variant="link">
              {name}
            </StyledText>

            <Space size={10} />

            <View style={styles.taglineContainer}>
              <StyledText size="base" font="regular" style={[styles.text, { color: colors.textLight }]}>
                {details?.tagline}
              </StyledText>
            </View>
          </View>
        </View>

        <Space size={10} />

        <View style={styles.wrapper}>
          <StyledText size="lg" font="bold" variant="link">
            Bio
          </StyledText>

          <Space size={10} />

          <StyledText size="base" font="light" style={styles.contentText}>
            {details?.bio}
          </StyledText>
        </View>
      </ScrollView>

      <View style={[styles.socialLink, { borderTopColor: colors.accent }]}>
        <Row>
          <StyledText font="medium">Twitter Handle</StyledText>

          <Pressable
            style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.background }]}
            onPress={() => handleTwitterProfile(details?.twitter_handle)}
          >
            <FontAwesome5 name="twitter" size={20} color={colors.primary} />
            <Space size={4} horizontal />
            <StyledText font="medium" style={{ color: colors.primary }}>
              {details?.twitter_handle ? getTwitterHandle(details?.twitter_handle) : 'N/A'}
            </StyledText>
          </Pressable>
        </Row>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  banner: {
    height: height / 5,
    width: '100%',
  },
  centered: {
    width: '100%',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    top: -40,
    paddingHorizontal: 20,
  },
  avatar: {
    height: 100,
    width: 100,
    borderRadius: 60,
    alignItems: 'center',
    top: -50,
  },
  text: {
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  image: {
    height: 103,
    width: 103,
    borderWidth: 2,
    borderRadius: 60,
  },
  info: {
    top: -40,
    alignItems: 'center',
  },
  contentText: {
    lineHeight: 18,
  },
  socialLink: {
    width: '100%',
    borderTopWidth: 1,
    padding: 20,
    marginBottom: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
  },
  taglineContainer: {
    width: '70%',
  },
});

export default Speaker;
