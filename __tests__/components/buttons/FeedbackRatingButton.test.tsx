import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import FeedBackRatingButton from '../../../components/buttons/FeedBackRatingButton';

describe('<FeedbackRatingButton/>', () => {
  it('Renders feedback rating button component', () => {
    render(
      <FeedBackRatingButton
        rating={{ icon: '', text: 'Ok', value: 0 }}
        onPress={() => console.log('Feedback gotten succesfully')}
        testID="btn1"
        onSelected={true}
      />,
    );
    expect(screen.getByText('Ok')).toBeDefined();
  });

  it('calls the function provided by onPress prop after pressing the button', () => {
    const onPress = jest.fn();
    render(<FeedBackRatingButton rating={{ icon: '', text: 'Ok', value: 0 }} onPress={onPress} onSelected={true} />);
    fireEvent.press(screen.getByText('Ok'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
