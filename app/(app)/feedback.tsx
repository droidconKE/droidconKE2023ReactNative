import { useTheme } from '@react-navigation/native';
import { useMutation } from '@tanstack/react-query';
import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import FeedBackRatingButton from '../../components/buttons/FeedBackRatingButton';
import SubmitFeedbackButton from '../../components/buttons/SubmitFeedbackButton';
import Space from '../../components/common/Space';
import StyledText from '../../components/common/StyledText';
import MainContainer from '../../components/container/MainContainer';
import FeedbackSentModal from '../../components/modals/FeedbackSentModal';
import { typography } from '../../config/typography';
import { sendFeedback } from '../../services/api';

export type TypeRatingStates = {
  icon: string;
  text: string;
  value: number;
};

const Feedback = () => {
  const { colors, dark } = useTheme();
  const [showModal, setShowModal] = useState(false);
  const [selectedRating, setSelectedRating] = useState(2);
  const [description, setDescription] = useState<string>('');
  const ratingStates: Array<TypeRatingStates> = [
    { icon: '😔', text: 'Bad', value: 0 },
    { icon: '😐', text: 'Okay', value: 1 },
    { icon: '😊', text: 'Great', value: 2 },
  ];
  const openModal = () => {
    setShowModal(true);
  };

  const { mutate } = useMutation({
    mutationFn: () => sendFeedback(description, selectedRating),
    onSuccess: () => {
      openModal();
    },
    onError: (error) => {
      console.error(error);
      //TODO: implement UI to handle error
    },
  });

  return (
    <MainContainer preset="scroll">
      <View style={styles.main}>
        <ImageBackground
          source={dark ? require('../../assets/images/bannerDark.png') : require('../../assets/images/bannerLight.png')}
          style={styles.feedBackBanner}
          resizeMode="cover"
        />
        <Space size={10} />
        <View style={styles.feedBackFormContainer}>
          <StyledText
            size="lg"
            font="bold"
            variant="text"
            style={[styles.FeedBackFormTitle, { color: colors.primary }]}
          >
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
          <SubmitFeedbackButton handlePress={mutate} text="SUBMIT FEEDBACK" />
        </View>

        <FeedbackSentModal showModal={showModal} />
      </View>
    </MainContainer>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
  },
  feedBackBanner: {
    height: 179,
    flex: 1,
    width: '100%',
  },
  feedBackForm: {
    flex: 1,
    paddingTop: 17,
    borderRadius: 10,
    borderWidth: 1,
  },
  feedBackFormContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
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
