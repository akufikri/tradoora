import { createTRPCReact } from '@trpc/react-query';
import { createTRPCClient, httpLink } from '@trpc/client';
import { QueryClient } from '@tanstack/react-query';
import { type AppRouter } from '@tradoora/shared';

export const trpc = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
});

export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpLink({
      url: 'http://localhost:3000/trpc',
    }),
  ],
});
