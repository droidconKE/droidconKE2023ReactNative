import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import DayButton from '../../../components/buttons/DayButton';

jest.mock('@react-navigation/native', () => ({
  useTheme: jest.fn().mockReturnValue({
    colors: {
      tertiary: 'red',
      tertiaryTint: 'blue',
      bg: 'orange',
      text: 'green',
    },
  }),
}));

describe('<DayButton/>', () => {
  const onPress = jest.fn();

  it('renders daybutton component', () => {
    render(<DayButton handlePress={() => console.log('pressed')} date={''} day={''} dateInfull="2022-11-16" />);
  });

  it('renders date', () => {
    render(
      <DayButton handlePress={() => console.log('pressed')} date={'16th'} day={'Day 1'} dateInfull="2022-11-16" />,
    );
    expect(screen.getByText('16th')).toBeDefined();
  });

  it('renders day', () => {
    render(
      <DayButton handlePress={() => console.log('pressed')} date={'17th'} day={'Day 2'} dateInfull="2022-11-17" />,
    );
    expect(screen.getByText('Day 2')).toBeDefined();
  });

  it('renders different color when button is selected', () => {
    render(<DayButton handlePress={onPress} date={''} day={''} selected dateInfull="2022-11-16" />);
    expect(screen.getByTestId('dayButton')).toHaveStyle({
      backgroundColor: 'red',
    });
    expect(screen.getByTestId('date')).toHaveStyle({
      color: 'orange',
    });
    expect(screen.getByTestId('day')).toHaveStyle({
      color: 'orange',
    });
  });

  it('fires onPress function when pressed', () => {
    render(<DayButton handlePress={onPress} date={''} day={''} dateInfull="2022-11-16" />);
    fireEvent.press(screen.getByTestId('dayButton'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
