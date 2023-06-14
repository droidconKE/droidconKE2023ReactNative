import { render, screen } from '@testing-library/react-native';
import React from 'react';

import StyledText from '../../../components/common/StyledText';

describe('<StyledText />', () => {
  it('renders StyledText component', () => {
    render(<StyledText children="Styled Text" />);
    expect(screen.getByText('Styled Text')).toBeTruthy();
  });

  it('renders correct style with title prop', () => {
    render(<StyledText children="Styled Text" />);
    expect(screen.getByText('Styled Text')).toHaveStyle({
      fontSize: 16,
      fontFamily: 'montserratRegular',
    });
  });
});
