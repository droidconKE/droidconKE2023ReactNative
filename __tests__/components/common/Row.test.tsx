import { render, screen } from '@testing-library/react-native';
import React from 'react';

import { View } from 'react-native';
import Row from '../../../components/common/Row';

describe('<Row />', () => {
  const children = <View />;

  it('renders correctly', () => {
    render(<Row children={children} />);

    screen.debug();

    expect(screen.getByTestId('row')).toBeTruthy();
  });
});
