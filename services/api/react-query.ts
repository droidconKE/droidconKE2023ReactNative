import { QueryClient } from '@tanstack/react-query';

/**
 * a react-query client with stale time set to "Infinity" so its never stale
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: Infinity },
  },
});
