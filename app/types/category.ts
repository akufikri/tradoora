import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@tradoora/shared';

type RouterOutputs = inferRouterOutputs<AppRouter>;
export type CategoryType = RouterOutputs['category']['list'][number];