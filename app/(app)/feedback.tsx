import { AntDesign } from '@expo/vector-icons';
import type { ExtendedTheme } from '@react-navigation/native';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FeedBackBanner from '../../assets/artworks/FeedBackBanner';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';
import { typography } from '../../config/typography';

// TODO: implement feedback page
/**
 * TASKS:
 * Implement feedback page
 * Should include a reactions component, a textarea and button
 */

const Feedback = () => {
  const { colors } = useTheme();
  const router = useRouter();
  return (
    <MainContainer preset="scroll" safeAreaEdges={['top']}>
      <View style={styles.FeedBackBannerParent}>
        <FeedBackBanner />
        <Pressable style={styles.headerTitle} onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={24} color={'white'} />
          <StyledText style={coloredStyles(colors).headerText}>Feedback</StyledText>
        </Pressable>
      </View>
      <View style={styles.FeedBackFormContainer}>
        <StyledText size="lg" font="bold" variant="text" style={coloredStyles(colors).FeedBackFormTitle}>
          Your feedback helps us improve
        </StyledText>
        <View style={styles.FeedBackForm}>
          <StyledText style={styles.FeedBackFormLabel} size="md">
            How is/was the event
          </StyledText>
          <View style={styles.FeedBackFormRatingContainer}>
            <Pressable style={coloredStyles(colors).pressableEmoji}>
              <Text style={styles.FormRatingText}>😔</Text>
              <StyledText font="bold" size="sm">
                Bad
              </StyledText>
            </Pressable>
            <Pressable style={coloredStyles(colors).pressableEmoji}>
              <Text style={styles.FormRatingText}>😐</Text>
              <StyledText font="bold" size="sm">
                Ok
              </StyledText>
            </Pressable>
            <Pressable style={coloredStyles(colors).pressableEmoji}>
              <Text style={styles.FormRatingText}>😊</Text>
              <StyledText font="bold" size="sm">
                Great
              </StyledText>
            </Pressable>
          </View>
          <TextInput
            style={coloredStyles(colors).feedbackInput}
            placeholder="Type message here"
            placeholderTextColor={colors.placeHolder}
          />
        </View>
        <Pressable style={coloredStyles(colors).pressableSubmit}>
          <StyledText style={coloredStyles(colors).pressableSubmitText}>SUBMIT FEEDBACK</StyledText>
        </Pressable>
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    paddingLeft: 23,
    flexDirection: 'row',
    columnGap: 22,
    position: 'absolute',
    width: '100%',
    paddingTop: 26,
    paddingBottom: 20,
  },
  FeedBackBannerParent: {
    maxHeight: 179,
    overflow: 'hidden',
    position: 'relative',
  },
  FeedBackFormContainer: {
    paddingTop: 30,
    width: '90%',
  },
  FeedBackForm: {
    flex: 1,
    paddingTop: 46,
  },
  FeedBackFormLabel: {
    textAlign: 'center',
    paddingBottom: 30,
  },
  FeedBackFormRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 57,
  },
  FormRatingText: {
    fontSize: 30,
  },
});

const coloredStyles = (colors: ExtendedTheme['colors']) =>
  StyleSheet.create({
    FeedBackFormTitle: {
      color: colors.primary,
      textAlign: 'center',
    },
    headerText: {
      color: colors.whiteConstant,
    },
    pressableEmoji: {
      minWidth: 67,
      minHeight: 67,
      backgroundColor: colors.bg,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 4,
    },
    pressableSubmit: {
      marginTop: 26,
      backgroundColor: colors.primary,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      height: 45,
    },
    pressableSubmitText: {
      color: 'white',
    },
    feedbackInput: {
      paddingLeft: 20,
      paddingTop: 12,
      backgroundColor: colors.bg,
      minHeight: 115,
      textAlignVertical: 'top',
      borderRadius: 7,
      fontFamily: typography.primary.light,
    },
  });
export default Feedback;
