import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { View } from 'react-native';
import Row from '../../../components/common/Row';

describe('<Row />', () => {
  const children = <View />;

  it('renders Row component', () => {
    render(<Row children={children} />);
    expect(screen.getByTestId('row')).toBeTruthy();
  });
});
