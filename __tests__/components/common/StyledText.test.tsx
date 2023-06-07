import { render, screen } from '@testing-library/react-native';
import React from 'react';

import StyledText from '../../../components/common/StyledText';

describe('<StyledText />', () => {
  it('renders correctly', () => {
    render(<StyledText title children="Styled Text" />);

    screen.debug();

    expect(screen.getByText('Styled Text')).toBeTruthy();
  });

  // test that the title prop changes the font size to 18, and font family to primary.bold
  it('renders correct style with title prop', () => {
    render(<StyledText title children="Styled Text" />);

    screen.debug();

    expect(screen.getByText('Styled Text')).toHaveStyle({
      fontSize: 18,
      fontFamily: 'montserratBold',
    });
  });
});
