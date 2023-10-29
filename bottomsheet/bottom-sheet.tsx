import type { EventMapBase, NavigationState } from '@react-navigation/native';
import type { BottomSheetNavigationOptions } from '@th3rdwave/react-navigation-bottom-sheet';
import { createBottomSheetNavigator } from '@th3rdwave/react-navigation-bottom-sheet';

import { withLayoutContext } from 'expo-router';

const { Navigator } = createBottomSheetNavigator();

export const BottomSheet = withLayoutContext<
  BottomSheetNavigationOptions,
  typeof Navigator,
  NavigationState,
  EventMapBase
>(Navigator);
