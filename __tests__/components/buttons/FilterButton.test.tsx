import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import FilterButton from '../../../components/buttons/FilterButton';

describe('FilterButton', () => {
  it('renders button with the correct label', () => {
    const { getByText } = render(
      <FilterButton label="Filter" onPress={() => console.log('clicked')} selected={false} />,
    );
    const buttonLabel = getByText('Filter');
    expect(buttonLabel).toBeTruthy();
  });

  it('calls the onPress function when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<FilterButton label="Filter" onPress={onPressMock} selected={false} />);
    const button = getByTestId('filterButton');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
