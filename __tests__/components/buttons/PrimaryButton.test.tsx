import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import PrimaryButton from '../../../components/buttons/PrimaryButton';

describe('<PrimaryButton/>', () => {
  it('renders button with the correct label', () => {
    const { getByText } = render(<PrimaryButton onPress={() => console.log('clicked')} label="Click Me" />);
    const buttonLabel = getByText('Click Me');
    expect(buttonLabel).toBeTruthy();
  });

  it('calls the onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<PrimaryButton onPress={onPressMock} label="Click Me" />);
    const button = getByTestId('primaryButton');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
