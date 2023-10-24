import { DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { RenderOptions } from '@testing-library/react-native';
import { render } from '@testing-library/react-native';
import type { ReactElement } from 'react';
import React from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      staleTime: Infinity,
    },
  },
});

const TestProviders = ({ children }: { children: React.ReactNode }) => {
  const theme = {
    ...DefaultTheme,
  };

  return (
    <ThemeProvider value={{ ...theme }}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: TestProviders, ...options });

export * from '@testing-library/react-native';
export { customRender as render };
