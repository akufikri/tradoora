import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@tradoora/shared';

type RouterOutputs = inferRouterOutputs<AppRouter>;

export type CheckoutType = RouterOutputs['transaction']['checkout'];
export type ListByUser = RouterOutputs['transaction']['listByUser'];