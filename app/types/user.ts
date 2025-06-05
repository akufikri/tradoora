import type { inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@tradoora/shared'; 

type RouterOutputs = inferRouterOutputs<AppRouter>;

export type registerType = RouterOutputs['user']['register'];

export type loginType = RouterOutputs['user']['login'];

export type meType = RouterOutputs['user']['me'];