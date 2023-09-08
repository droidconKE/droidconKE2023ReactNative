import { useTheme } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FeedBackBanner from '../../assets/artworks/FeedBackBanner';
import BackNavigationButton from '../../components/buttons/BackNavigationButton';
import FeedBackRatingButton from '../../components/buttons/FeedBackRatingButton';
import SubmitFeedbackButton from '../../components/buttons/SubmitFeedbackButton';
import Space from '../../components/common/Space';
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
  const [selectedRating, setSelectedRating] = useState(2);
  const [description, setDescription] = useState('');
  const ratingStates: Array<TypeRatingStates> = [
    { icon: '😔', text: 'Bad', value: 0 },
    { icon: '😐', text: 'Okay', value: 1 },
    { icon: '😊', text: 'Great', value: 2 },
  ];
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <MainContainer preset="scroll" safeAreaEdges={['top']}>
      <FeedbackSentModal showModal={showModal} />
      <View style={styles.feedBackFormContainer}>
        <StyledText size="lg" font="bold" variant="text" style={[styles.FeedBackFormTitle, { color: colors.primary }]}>
          Your feedback helps us improve
        </StyledText>
        <Space size={29} />
        <View style={[styles.feedBackForm, { backgroundColor: colors.background, borderColor: colors.border }]}>
          <StyledText style={styles.feedBackFormLabel} size="base">
            How is/was the event
          </StyledText>
          <View style={styles.feedBackFormRatingContainer}>
            {ratingStates.map((rating, index) => {
              return (
                <FeedBackRatingButton
                  rating={rating}
                  key={index}
                  onPress={setSelectedRating}
                  onSelected={rating.value === selectedRating}
                />
              );
            })}
          </View>
        </View>
        <Space size={30} />
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
        <Space size={26} />
        <SubmitFeedbackButton openModal={openModal} text="SUBMIT FEEDBACK" />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  feedBackBannerParent: {
    maxHeight: 179,
    overflow: 'hidden',
    position: 'relative',
  },
  FeedBackForm: {
    flex: 1,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
  },
  feedBackFormContainer: {
    width: '90%',
  },
  feedBackFormLabel: {
    textAlign: 'center',
    paddingBottom: 30,
  },
  feedBackFormRatingContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingBottom: 27,
  },
  FeedBackFormTitle: {
    textAlign: 'center',
  },
  feedbackInput: {
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
