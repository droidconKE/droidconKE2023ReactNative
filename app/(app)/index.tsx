import { Redirect, useRootNavigationState } from 'expo-router';

export default function Page() {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href="/home" />;
}
