/* eslint-disable @typescript-eslint/consistent-type-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Slot } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  initialRouteName: 'index',
};

export default function Layout() {
  if (typeof window === 'undefined') return <Slot />;
  const { BottomSheet } =
    require('../../../../bottomsheet/bottom-sheet') as typeof import('../../../../bottomsheet/bottom-sheet');

  return <BottomSheet />;
}
