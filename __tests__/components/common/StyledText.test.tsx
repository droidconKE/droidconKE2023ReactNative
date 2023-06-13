import { render, screen } from '@testing-library/react-native';
import React from 'react';

import StyledText from '../../../components/common/StyledText';

describe('<StyledText />', () => {
  it('renders StyledText component', () => {
    render(<StyledText title children="Styled Text" />);
    expect(screen.getByText('Styled Text')).toBeTruthy();
  });

  it('renders correct style with title prop', () => {
    render(<StyledText title children="Styled Text" />);
    expect(screen.getByText('Styled Text')).toHaveStyle({
      fontSize: 18,
      fontFamily: 'montserratBold',
    });
  });
});
