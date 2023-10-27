import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import SubmitFeedbackButton from '../../../components/buttons/SubmitFeedbackButton';

describe('<SubmitFeedbackButton/>', () => {
  it('Renders submit feedback button component', () => {
    render(
      <SubmitFeedbackButton
        handlePress={() => {
          console.log('hello');
        }}
        text="SUBMIT FEEDBACK"
      />,
    );
    expect(screen.getByText('SUBMIT FEEDBACK')).toBeDefined();
  });
  it('calls the function provided by onPress prop after pressing the button', () => {
    const onPress = jest.fn();
    render(<SubmitFeedbackButton handlePress={onPress} text="SUBMIT FEEDBACK" />);
    fireEvent.press(screen.getByText('SUBMIT FEEDBACK'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
