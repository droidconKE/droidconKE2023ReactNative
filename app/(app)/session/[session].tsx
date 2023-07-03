import { AntDesign, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { Image } from 'expo-image';
import { Stack, useRouter, useSearchParams } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Row from '../../../components/common/Row';
import Space from '../../../components/common/Space';
import StyledText from '../../../components/common/StyledText';
import MainContainer from '../../../components/container/MainContainer';
import { Sessions } from '../../../mock/sessions';
import { getSessionTimesAndLocation, getTwitterHandle, truncate } from '../../../util/helpers';

const Session = () => {
  const { colors, dark } = useTheme();
  const { slug } = useSearchParams();
  const router = useRouter();

  // filter session by slug
  const session = Sessions.data.filter((_session) => _session.slug === slug)[0];

  const [showMoreBio, setShowMoreBio] = useState(false);

  return (
    <View style={styles.main}>
      <MainContainer preset="scroll">
        <Stack.Screen
          options={{
            title: `Session Details`,
            headerTitleAlign: 'center',
            headerTintColor: colors.text,
            headerStyle: {
              backgroundColor: dark ? colors.bg : colors.background,
            },
            headerTitleStyle: {
              fontSize: 18,
              fontWeight: '300',
            },
            headerLeft: () => (
              <AntDesign name="arrowleft" size={24} color={colors.text} onPress={() => router.back()} />
            ),
          }}
        />

        <View style={styles.main}>
          <View style={[styles.centered, { borderColor: dark ? colors.background : colors.border }]}>
            <Row>
              <View>
                <View style={styles.row}>
                  <FontAwesome5 name="android" size={18} color={colors.tertiary} />
                  <Space size={5} horizontal />
                  <StyledText size="sm" font="regular" style={{ color: colors.tertiary }}>
                    {session?.speakers && session?.speakers.length > 1 ? 'Speakers' : 'Speaker'}
                  </StyledText>
                </View>
                <StyledText size="lg" font="bold" style={{ color: dark ? colors.text : colors.primary }}>
                  {session?.speakers.map((speaker) => speaker.name).join(', ')}
                </StyledText>
              </View>
              <View>
                <Space size={14} />
                <FontAwesome5 name="star" size={24} color={colors.primary} />
              </View>
            </Row>

            <Space size={20} />

            <StyledText size="lg" font="bold">
              {session?.title}
            </StyledText>

            <Space size={16} />

            {session?.speakers && session?.speakers.length > 1 ? (
              session?.speakers.map((speaker, index) => (
                <View key={index.toString()}>
                  <StyledText font="regular" style={{ color: colors.primary }}>
                    {speaker.name} - {''}
                    <StyledText font="regular" style={{ color: colors.textLight }}>
                      {!showMoreBio ? truncate(140, speaker.biography) : speaker.biography}
                      {speaker.biography && speaker.biography.length > 140 && (
                        <StyledText
                          size="sm"
                          font="semiBold"
                          style={{ color: colors.primary }}
                          onPress={() => setShowMoreBio(!showMoreBio)}
                        >
                          {showMoreBio ? ' ...Show less' : ' Show more'}
                        </StyledText>
                      )}
                    </StyledText>
                  </StyledText>
                  <Space size={10} />
                </View>
              ))
            ) : (
              <StyledText font="regular" style={{ color: colors.textLight }}>
                {!showMoreBio ? truncate(140, session?.speakers[0]?.biography) : session?.speakers[0]?.biography}
                {session?.speakers[0]?.biography && session?.speakers[0]?.biography.length > 140 && (
                  <StyledText
                    size="sm"
                    font="semiBold"
                    style={{ color: colors.primary }}
                    onPress={() => setShowMoreBio(!showMoreBio)}
                  >
                    {showMoreBio ? ' ...Show less' : ' Show more'}
                  </StyledText>
                )}
              </StyledText>
            )}

            <Space size={16} />

            <Image
              source={{ uri: session?.session_image || '' }}
              style={styles.image}
              contentFit="fill"
              contentPosition="left center"
            />
          </View>

          <View style={[styles.centered, { borderColor: dark ? colors.background : colors.border }]}>
            <StyledText font="light">{getSessionTimesAndLocation(session?.slug || '')}</StyledText>

            <Space size={16} />

            <View style={[styles.chip, { backgroundColor: dark ? colors.background : colors.text }]}>
              <StyledText style={[styles.chipText, { color: dark ? colors.text : colors.background }]}>
                #{session?.session_level}
              </StyledText>
            </View>
          </View>

          <View style={styles.withPadding}>
            {session?.speakers && session?.speakers.length > 1 ? (
              <View>
                <StyledText font="medium" size="lg">
                  Twitter Handles
                </StyledText>

                <Space size={16} />

                <Row>
                  {session?.speakers.map((speaker, index) => (
                    <Pressable
                      key={index.toString()}
                      style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.background }]}
                    >
                      <FontAwesome5 name="twitter" size={20} color={colors.primary} />
                      <Space size={4} horizontal />
                      <StyledText font="medium" style={{ color: colors.primary }}>
                        {speaker.twitter ? getTwitterHandle(speaker.twitter) : 'N/A'}
                      </StyledText>
                    </Pressable>
                  ))}
                </Row>
              </View>
            ) : (
              <Row>
                <StyledText font="medium" size="lg">
                  Twitter Handle
                </StyledText>

                <Pressable style={[styles.button, { borderColor: colors.primary, backgroundColor: colors.background }]}>
                  <FontAwesome5 name="twitter" size={20} color={colors.primary} />
                  <Space size={4} horizontal />
                  <StyledText font="medium" style={{ color: colors.primary }}>
                    {session?.speakers[0]?.twitter ? getTwitterHandle(session?.speakers[0]?.twitter) : 'N/A'}
                  </StyledText>
                </Pressable>
              </Row>
            )}
          </View>
        </View>
      </MainContainer>

      {/** Floating action button. TODO: Add share functionality */}
      <Pressable style={[styles.fab, { backgroundColor: colors.tertiary }]}>
        <MaterialCommunityIcons name="share" size={30} color={colors.background} />
      </Pressable>
    </View>
  );
};

export default Session;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  centered: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomWidth: 0.5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 190,
    width: '100%',
    borderRadius: 10,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  chipText: {
    textTransform: 'uppercase',
  },
  withPadding: {
    padding: 20,
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
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
