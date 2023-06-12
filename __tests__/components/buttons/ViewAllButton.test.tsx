import { fireEvent, render, screen } from '@testing-library/react-native';
import ViewAllButton from '../../../components/buttons/ViewAllButton';

describe('<ViewAllButton/>', () => {
  // Test that <ViewAllButton/> component is rendered
  it('renders ViewAllButton component', () => {
    render(<ViewAllButton onPress={() => console.log('pressed')} label="+80" />);
    expect(screen.getByTestId('viewAllButton')).toBeTruthy();
  });

  // Test that label +80 is shown
  it('Test that label +80 is shown', () => {
    render(<ViewAllButton onPress={() => console.log('pressed')} label="+80" />);
    expect(screen.getByText('+80')).toBeDefined();
  });

  // Test that onPress function works
  it('Test that onPress function works', () => {
    const onPress = jest.fn();
    render(<ViewAllButton label="+80" onPress={onPress} />);
    fireEvent.press(screen.getByText('+80'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
