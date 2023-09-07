import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';

import BackNavigationButton from '../../../components/buttons/BackNavigationButton';

describe('<BackNavigationButton/>', () => {
  it('Renders  back navigation button component', () => {
    render(<BackNavigationButton text="Go back" onPress={() => console.log('back')} />);
    expect(screen.getByText('Go back')).toBeDefined();
  });
  it('calls the function provided by onPress prop after pressing the button', () => {
    const onPress = jest.fn();
    render(<BackNavigationButton text="Go back" onPress={onPress} />);
    fireEvent.press(screen.getByText('Go back'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
