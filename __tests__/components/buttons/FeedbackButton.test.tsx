import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import FeedbackButton from '../../../components/buttons/FeedbackButton';

describe('<FeedbackButton/>', () => {
  it('Renders feedback button component', () => {
    render(<FeedbackButton onPress={() => console.log('Feedback gotten succesfully')} />);
    expect(screen.getByText('Feedback')).toBeDefined();
  });

  it('calls the function provided by onPress prop after pressing the button', () => {
    const onPress = jest.fn();
    render(<FeedbackButton onPress={onPress} />);
    fireEvent.press(screen.getByText('Feedback'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
