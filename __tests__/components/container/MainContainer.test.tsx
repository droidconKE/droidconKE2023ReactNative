import { render, screen } from '@testing-library/react-native';
import React from 'react';

import MainContainer from '../../../components/container/MainContainer';

describe('<MainContainer />', () => {
  const children = <></>;

  it('renders MainContainer component', () => {
    render(<MainContainer children={children} />);
    expect(screen.getByTestId('main-container')).toBeTruthy();
  });
});
