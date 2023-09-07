import { AntDesign } from '@expo/vector-icons';
import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FeedBackBanner from '../../assets/artworks/FeedBackBanner';
import BackNavigationButton from '../../components/buttons/BackNavigationButton';
import FeedBackRatingButton from '../../components/buttons/FeedBackRatingButton';
import SubmitFeedbackButton from '../../components/buttons/SubmitFeedbackButton';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';
import FeedbackSentModal from '../../components/modals/FeedbackSentModal';
import { typography } from '../../config/typography';

export type TypeRatingStates = {
  icon: string;
  text: string;
  value: number;
};

const Feedback = () => {
  const { colors } = useTheme();
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [_selectedRating, setSelectedRating] = useState(2);
  const [description, setDescription] = useState('');
  const ratingStates: Array<TypeRatingStates> = [
    { icon: '😔', text: 'Bad', value: 0 },
    { icon: '😐', text: 'Okay', value: 1 },
    { icon: '😊', text: 'Great', value: 2 },
  ];

  return (
    <MainContainer preset="scroll" safeAreaEdges={['top']}>
      <FeedbackSentModal showModal={showModal} />
      <View style={styles.FeedBackBannerParent}>
        <FeedBackBanner />
        <BackNavigationButton text="Feedback" onPress={() => router.back()} />
      </View>
      <View style={styles.FeedBackFormContainer}>
        <StyledText size="lg" font="bold" variant="text" style={[styles.FeedBackFormTitle, { color: colors.primary }]}>
          Your feedback helps us improve
        </StyledText>
        <View style={[styles.FeedBackForm, { backgroundColor: colors.background, borderColor: colors.border }]}>
          <StyledText style={styles.FeedBackFormLabel} size="base">
            How is/was the event
          </StyledText>
          <View style={styles.FeedBackFormRatingContainer}>
            {ratingStates.map((rating, index) => {
              return <FeedBackRatingButton rating={rating} key={index} onPress={setSelectedRating} />;
            })}
          </View>
        </View>
        <TextInput
          style={[
            styles.feedbackInput,
            { backgroundColor: colors.bg, borderColor: colors.borderColor, color: colors.bgInverse },
          ]}
          placeholder="Type message here"
          placeholderTextColor={colors.placeHolder}
          value={description}
          onChangeText={setDescription}
        />
        <SubmitFeedbackButton openModal={openModal} text="SUBMIT FEEDBACK" />
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
  FeedBackForm: {
    flex: 1,
    marginTop: 29,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
  },
  FeedBackFormContainer: {
    paddingTop: 30,
    width: '90%',
  },
  FeedBackFormLabel: {
    textAlign: 'center',
    paddingBottom: 30,
  },
  FeedBackFormRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 27,
  },
  FeedBackFormTitle: {
    textAlign: 'center',
  },
  pressableSubmit: {
    marginTop: 26,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    height: 45,
  },
  pressableSubmitText: {
    color: 'white',
  },
  feedbackInput: {
    marginTop: 30,
    paddingLeft: 20,
    paddingTop: 12,
    minHeight: 115,
    textAlignVertical: 'top',
    borderRadius: 7,
    borderWidth: 1,
    fontFamily: typography.primary.light,
  },
});

export default Feedback;
